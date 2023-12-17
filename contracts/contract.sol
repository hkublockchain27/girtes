// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// OpenZeppelin kütüphanesinden ERC721.sol dosyasını içe aktar
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// ERC721.sol dosyasından türetilen MyNFT adlı bir akıllı sözleşme tanımla
contract MyNFT is ERC721URIStorage {

    // Akıllı sözleşmenin sahibini belirleyen bir değişken tanımla
    address public owner;

    // NFT'lerin toplam sayısını tutan bir değişken tanımla
    uint256 public totalSupply;

    // NFT'lerin metaverilerini depolayan bir harita tanımla
    mapping(uint256 => string) public tokenURIs;

    // Akıllı sözleşmenin kurucu fonksiyonu
    // ERC721.sol dosyasının kurucu fonksiyonunu çağırarak, akıllı sözleşmenin adını ve sembolünü belirle
    // Akıllı sözleşmenin sahibini, fonksiyonu çağıran hesap olarak atama
    constructor() ERC721("MyNFT", "MNFT") {
        owner = msg.sender;
    }

    // Sadece akıllı sözleşmenin sahibinin çağırabileceği bir değiştirici tanımla
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    // NFT oluşturan bir fonksiyon tanımla
    // Fonksiyonun parametreleri: NFT'nin metaverisi
    // Fonksiyonun erişim belirleyicisi: public
    // Fonksiyonun değiştiricisi: onlyOwner
    function mint(string memory tokenURI) public onlyOwner {
        // NFT'nin kimliğini, toplam arzı artırarak belirle
        totalSupply++;
        uint256 tokenId = totalSupply;

        // Fonksiyonu çağıran hesabı, NFT'nin sahibi olarak belirle
        address sender = msg.sender;

        // ERC721.sol dosyasındaki _mint fonksiyonunu çağırarak, NFT'yi oluştur
        _mint(sender, tokenId);

        // NFT'nin metaverisini haritaya ekle
        tokenURIs[tokenId] = tokenURI;

        // ERC721.sol dosyasındaki _setTokenURI fonksiyonunu çağırarak, NFT'nin metaverisini belirle
        _setTokenURI(tokenId, tokenURI);
    }

    // NFT'yi transfer eden bir fonksiyon tanımla
    // Fonksiyonun parametreleri: NFT'nin alıcısı ve kimliği
    // Fonksiyonun erişim belirleyicisi: public
    function transfer(address to, uint256 tokenId) public {
        // Fonksiyonu çağıran hesabı, NFT'nin göndericisi olarak belirle
        address from = msg.sender;

        // ERC721.sol dosyasındaki safeTransferFrom fonksiyonunu çağırarak, NFT'yi transfer et
        safeTransferFrom(from, to, tokenId);
    }
}


