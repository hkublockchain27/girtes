#![cfg_attr(not(feature = "std"), no_std, no_main)]

// ink! makrolarını dahil ediyoruz
use ink_lang as ink;

// NFT'nin kimliği u32 tipinde bir sayı olarak belirlenir
pub type TokenId = u32;

// Akıllı kontratımızın adını ve versiyonunu belirtiyoruz
#[ink::contract]
mod nft {
    // Akıllı kontratımızın durumunu tutacak bir yapı tanımlıyoruz
    #[ink(storage)]
    pub struct Nft {
        // Akıllı kontratımızın adını ve sembolünü tutacak alanlar tanımlıyoruz
        name: String,
        symbol: String,
        // Her NFT'nin sahibini tutacak bir alan tanımlıyoruz
        owners: ink_storage::collections::HashMap<TokenId, AccountId>,
        // Toplam NFT sayısını tutacak bir alan tanımlıyoruz
        total_supply: Lazy<u32>,
    }

    // Akıllı kontratımızın olaylarını tanımlıyoruz
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        id: TokenId,
    }

    // Akıllı kontratımızın fonksiyonlarını tanımlıyoruz
    impl Nft {
        // Akıllı kontratımızın oluşturulması için bir fonksiyon tanımlıyoruz
        #[ink(constructor)]
        pub fn new(name: String, symbol: String) -> Self {
            // Akıllı kontratımızın adını ve sembolünü parametre olarak alıyoruz
            Self {
                name,
                symbol,
                owners: ink_storage::collections::HashMap::new(),
                total_supply: Lazy::new(0),
            }
        }

        // Akıllı kontratımızın adını döndüren bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn name(&self) -> &String {
            // Akıllı kontratımızın adını döndürüyoruz
            &self.name
        }

        // Akıllı kontratımızın sembolünü döndüren bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn symbol(&self) -> &String {
            // Akıllı kontratımızın sembolünü döndürüyoruz
            &self.symbol
        }

        // Akıllı kontratımızın toplam NFT sayısını döndüren bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn total_supply(&self) -> u32 {
            // Akıllı kontratımızın toplam NFT sayısını döndürüyoruz
            *self.total_supply
        }

        // Bir NFT'nin sahibini döndüren bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn owner_of(&self, id: TokenId) -> Option<AccountId> {
            // NFT'nin sahibini döndürüyoruz
            // Eğer NFT yoksa None döndürüyoruz
            self.owners.get(&id).copied()
        }

        // Bir NFT oluşturmak için bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn mint(&mut self, id: TokenId) -> Result<(), Error> {
            // NFT'yi oluşturmak isteyen hesabın adresini alıyoruz
            let caller = self.env().caller();
            // NFT'nin zaten var olup olmadığını kontrol ediyoruz
            if self.owners.contains_key(&id) {
                return Err(Error::TokenExists);
            }
            // NFT'nin sahibini güncelliyoruz
            self.owners.insert(id, caller);
            // Toplam NFT sayısını arttırıyoruz
            self.total_supply += 1;
            // Transfer olayını tetikliyoruz
            self.env().emit_event(Transfer {
                from: None,
                to: Some(caller),
                id,
            });
            // NFT'nin başarıyla oluşturulduğunu bildiriyoruz
            Ok(())
        }

        // Bir NFT'yi başka bir hesaba göndermek için bir fonksiyon tanımlıyoruz
        #[ink(message)]
        pub fn transfer(&mut self, to: AccountId, id: TokenId) -> Result<(), Error> {
            // NFT'yi göndermek isteyen hesabın adresini alıyoruz
            let caller = self.env().caller();
            // NFT'nin sahibini kontrol ediyoruz
            let owner = self.owner_of(id).ok_or(Error::TokenNotFound)?;
            // NFT'nin sahibinin gönderen hesapla aynı olup olmadığını kontrol ediyoruz
            if caller != owner {
                return Err(Error::NotOwner);
            }
            // NFT'yi gönderiyoruz
            self.transfer_from_to(owner, to, id)?;
            // Transfer olayını tetikliyoruz
            self.env().emit_event(Transfer {
                from: Some(owner),
                to: Some(to),
                id,
            });
            // Transfer başarılı olduğunu bildiriyoruz
            Ok(())
        }

        // Bir NFT'yi başka bir hesaba göndermek için yardımcı bir fonksiyon tanımlıyoruz
        fn transfer_from_to(
            &mut self,
            from: AccountId,
            to: AccountId,
            id: TokenId,
        ) -> Result<(), Error> {
            // NFT'nin sahibini güncelliyoruz
            self.owners.insert(id, to);
            // Toplam NFT sayısını değiştirmiyoruz
            // Transfer başarılı olduğunu bildiriyoruz
            Ok(())
        }
    }

    // Akıllı kontratımızın hatalarını tanımlıyoruz
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        NotOwner,
        NotApproved,
        TokenExists,
        TokenNotFound,
    }

    // Akıllı kontratımızın testlerini tanımlıyoruz
    #[cfg(test)]
    mod tests {
        use super::*;
        use ink_lang as ink;

        // Akıllı kontratımızın oluşturulmasını test eden bir fonksiyon tanımlıyoruz
        #[ink::test]
        fn create_contract_works() {
            // Akıllı kontratımızı "MyNFT" adı ve "NFT" sembolü ile oluşturuyoruz
            let contract = Nft::new(String::from("MyNFT"), String::from("NFT"));
            // Akıllı kontratımızın adının ve sembolünün doğru olduğunu doğruluyoruz
            assert_eq!(contract.name(), "MyNFT");
            assert_eq!(contract.symbol(), "NFT");
            // Akıllı kontratımızın toplam NFT sayısının 0 olduğunu doğruluyoruz
            assert_eq!(contract.total_supply(), 0);
        }

        // Akıllı kontratımızın NFT oluşturma fonksiyonunu test eden bir fonksiyon tanımlıyoruz
        #[ink::test]
        fn mint_works() {
            // Akıllı kontratımızı "MyNFT" adı ve "NFT" sembolü ile oluşturuyoruz
            let mut contract = Nft::new(String::from("MyNFT"), String::from("NFT"));
            // NFT'yi oluşturmak isteyen hesabın adresini alıyoruz
            let caller = AccountId::from([0x01; 32]);
            // NFT'yi 1 kimliği ile oluşturuyoruz
            assert_eq!(contract.mint(1), Ok(()));
            // Akıllı kontratımızın toplam NFT sayısının 1 olduğunu doğruluyor
        }

    }     

}