// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// OpenZeppelin kütüphanesinden ERC721.sol dosyasını içe aktar
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// ERC721.sol dosyasından türetilen MyNFT adlı bir akıllı sözleşme tanımla
contract MyNFT is ERC721URIStorage {

    // Akıllı sözleşmenin kurucu fonksiyonu
    // ERC721.sol dosyasının kurucu fonksiyonunu çağırarak, akıllı sözleşmenin adını ve sembolünü belirle
    constructor() ERC721("MyNFT", "MNFT") {
    }

    // NFT oluşturan bir fonksiyon tanımla
    // Fonksiyonun parametreleri: NFT'nin kimliği ve metaverisi
    // Fonksiyonun erişim belirleyicisi: public
    function mint(uint256 tokenId, string memory tokenURI) public {
        // Fonksiyonu çağıran hesabı, NFT'nin sahibi olarak belirle
        address owner = msg.sender;
        // ERC721.sol dosyasındaki _mint fonksiyonunu çağırarak, NFT'yi oluştur
        _mint(owner, tokenId);
        // ERC721.sol dosyasındaki _setTokenURI fonksiyonunu çağırarak, NFT'nin metaverisini belirle
        _setTokenURI(tokenId, tokenURI);
    }

    // NFT'yi transfer eden bir fonksiyon tanımla
    // Fonksiyonun parametreleri: NFT'nin alıcısı ve kimliği
    // Fonksiyonun erişim belirleyicisi: public
    function transfer(address to, uint256 tokenId) public {
        // Fonksiyonu çağıran hesabı, NFT'nin göndericisi olarak belirle
        address from = msg.sender;
        // ERC721.sol dosyasındaki transferFrom fonksiyonunu çağırarak, NFT'yi transfer et
        transferFrom(from, to, tokenId);
        // NFT'nin alıcısının, jetonu başka bir kişiye atamasını engellemek için, NFT'nin sahibinin kendisi dışında kimseye transfer izni vermemesini sağla
        _approve(address(0), tokenId, msg.sender);

    }
}
