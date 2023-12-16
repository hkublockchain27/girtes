import { FunctionComponent } from "react";
import styles from "./SignUpPageDesktop.module.css";

const SignUpPageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.signUpPageDesktop}>
      <div className={styles.header}>
        <div className={styles.topBanner}>
          <div className={styles.text}>
            Ücretsiz Kurslar 🌟 Yakında Bitiyor, Hemen Alın
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
      <div className={styles.subContainerParent}>
        <div className={styles.subContainer2}>
          <div className={styles.textContainer}>
            <div className={styles.heading3}>Öğrenci Görüşleri</div>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.card}>
              <div className={styles.container6}>
                <div className={styles.paragraph1}>
                  Web tasarım kursu bana sağlam bir temel sağladı. Eğitmenler
                  bilgili ve destekleyiciydi ve etkileşimli öğrenme ortamı ilgi
                  çekiciydi. Şiddetle tavsiye ederim!
                </div>
              </div>
              <div className={styles.line} />
              <div className={styles.container7}>
                <div className={styles.subContainer3}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.name}>Ahmet L</div>
                </div>
                <div className={styles.button8}>
                  <div className={styles.text4}>Devamını Oku</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsContainer6}>
              <div className={styles.button9}>
                <img className={styles.icon7} alt="" src="/icon@2x.png" />
              </div>
              <div className={styles.button9}>
                <img className={styles.icon7} alt="" src="/icon@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.signUp}>
          <div className={styles.textContainer1}>
            <div className={styles.heading4}>Kayıt Ol</div>
            <div className={styles.paragraph2}>
              Ayrıcalıklı özelliklerin kilidini açmak için bir hesap oluşturun.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.container8}>
              <div className={styles.subContainer4}>
                <div className={styles.heading3}>Ad Soyad</div>
                <div className={styles.inputField}>
                  <div className={styles.paragraph1}>Adınızı giriniz</div>
                </div>
              </div>
              <div className={styles.subContainer4}>
                <div className={styles.heading3}>Email</div>
                <div className={styles.inputField}>
                  <div className={styles.paragraph1}>E-postanızı giriniz</div>
                </div>
              </div>
              <div className={styles.subContainer4}>
                <div className={styles.heading3}>Password</div>
                <div className={styles.inputField2}>
                  <div className={styles.paragraph1}>Şifrenizi girin</div>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                </div>
              </div>
              <div className={styles.checkBoxContainer}>
                <img
                  className={styles.checkBoxIcon}
                  alt=""
                  src="/check-box@2x.png"
                />
                <div className={styles.paragraph1}>
                  {`Kullanım `}
                  <span className={styles.koullarn}>Koşullarını</span> ve
                  <span className={styles.koullarn}> Gizlilik Politika</span>
                  sını kabul ediyorum
                </div>
              </div>
              <div className={styles.button11}>
                <div className={styles.text9}>Kayıt Ol</div>
              </div>
            </div>
            <div className={styles.container9}>
              <div className={styles.line2} />
              <div className={styles.text}>Veya</div>
              <div className={styles.line2} />
            </div>
            <div className={styles.button12}>
              <img className={styles.icon10} alt="" src="/icon@2x.png" />
              <div className={styles.text4}>Google'a kaydolun</div>
            </div>
            <div className={styles.button13}>
              <div className={styles.text}>
                {`Zaten hesabınız var mı? `}
                <span className={styles.koullarn}>Giriş yap</span>
              </div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageDesktop;
