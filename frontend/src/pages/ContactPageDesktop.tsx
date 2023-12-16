import { FunctionComponent } from "react";
import styles from "./ContactPageDesktop.module.css";

const ContactPageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.contactPageDesktop}>
      <div className={styles.header}>
        <div className={styles.topBanner}>
          <div className={styles.text}>
            Ücretsiz Kurslar 🌟 İndirim Yakında Bitiyor, Hemen Alın
          </div>
          <img className={styles.icon} alt="" src="/icon2@2x.png" />
        </div>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div className={styles.buttonsContainer}>
              <div className={styles.button}>
                <div className={styles.text}>Anasayfa</div>
              </div>
              <div className={styles.text}>Kurslar</div>
              <div className={styles.text}>Hakkımızda</div>
              <div className={styles.text}>İletişim</div>
            </div>
          </div>
          <div className={styles.buttonsContainer1}>
            <div className={styles.text}>Kayıt Ol</div>
            <div className={styles.button1}>
              <div className={styles.text}>Giriş Yap</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.container1}>
          <div className={styles.subContainer}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div className={styles.buttonsContainer2}>
              <div className={styles.button2}>
                <img className={styles.icon} alt="" src="/icon7@2x.png" />
                <div className={styles.text}>hello@girtes.com</div>
              </div>
              <div className={styles.button2}>
                <img className={styles.icon} alt="" src="/icon8@2x.png" />
                <div className={styles.text}>+90 850 000 0000</div>
              </div>
              <div className={styles.button2}>
                <img className={styles.icon} alt="" src="/icon9@2x.png" />
                <div className={styles.text}>
                  Türkiye, Ankara Gençlik Spor Bakanlığı
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subContainer1}>
            <div className={styles.container2}>
              <div className={styles.heading}>Anasayfa</div>
              <div className={styles.buttonsContainer3}>
                <div className={styles.textButton7}>Faydalar</div>
                <div className={styles.textButton7}>Kurslarımız</div>
                <div className={styles.textButton7}>Referanslarımız</div>
                <div className={styles.textButton7}>SSS'miz</div>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.heading}>Hakkımızda</div>
              <div className={styles.buttonsContainer3}>
                <div className={styles.textButton7}>Şirket</div>
                <div className={styles.textButton7}>Başarılar</div>
                <div className={styles.textButton7}>Hedeflerimiz</div>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.heading}>Sosyal Medya</div>
              <div className={styles.buttonsContainer5}>
                <div className={styles.button5}>
                  <img className={styles.icon} alt="" src="/icon10@2x.png" />
                </div>
                <div className={styles.button5}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                </div>
                <div className={styles.button5}>
                  <img className={styles.icon} alt="" src="/icon12@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.text3}>
          © 2023 Girtes.Com . All rights reserved.
        </div>
      </div>
      <div className={styles.container5}>
        <div className={styles.heading3}>İletişim</div>
        <div
          className={styles.paragraph}
        >{`Bizimle İletişime Geçmekten çekinmeyiniz. Her türlü Sorunuzu Sorabilirsiniz. `}</div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.form}>
          <div className={styles.formElements}>
            <div className={styles.container6}>
              <div className={styles.subContainer2}>
                <div className={styles.heading4}>Ad</div>
                <div className={styles.inputField}>
                  <div className={styles.text4}>Adını Girin</div>
                </div>
              </div>
              <div className={styles.subContainer2}>
                <div className={styles.heading4}>Soyad</div>
                <div className={styles.inputField}>
                  <div className={styles.text4}>Soyadını Girin</div>
                </div>
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.subContainer2}>
                <div className={styles.heading4}>Email</div>
                <div className={styles.inputField}>
                  <div className={styles.text4}>E-postanızı giriniz</div>
                </div>
              </div>
              <div className={styles.subContainer2}>
                <div className={styles.heading4}>Telefon</div>
                <div className={styles.inputField}>
                  <div className={styles.text4}>Telefon Numarasını Girin</div>
                </div>
              </div>
            </div>
            <div className={styles.container8}>
              <div className={styles.heading4}>Konu</div>
              <div className={styles.inputField}>
                <div className={styles.text4}>Konunuzu girin</div>
              </div>
            </div>
          </div>
          <div className={styles.container8}>
            <div className={styles.heading4}>Mesaj</div>
            <div className={styles.inputField5}>
              <div className={styles.text4}>Mesajınızı buraya girin...</div>
            </div>
          </div>
          <div className={styles.button8}>
            <div className={styles.text12}>Mesajınızı Gönderin</div>
          </div>
        </div>
        <div className={styles.line1} />
        <div className={styles.buttonsContainer6}>
          <div className={styles.button9}>
            <div className={styles.button10}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.textButton7}>support@girtes.com</div>
          </div>
          <div className={styles.button9}>
            <div className={styles.button10}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.textButton7}>+90 85000 00000</div>
          </div>
          <div className={styles.button9}>
            <div className={styles.button10}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.textButton7}>
              Türkiye, Ankara Gençlik Spor
            </div>
          </div>
          <div className={styles.button9}>
            <div className={styles.buttonsContainer5}>
              <div className={styles.button5}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
              </div>
              <div className={styles.button5}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
              </div>
              <div className={styles.button5}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
              </div>
            </div>
            <div className={styles.textButton7}>Sosyal Medya</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageDesktop;
