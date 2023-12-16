import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursesOpenPageDesktop.module.css";

const CoursesOpenPageDesktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextButton2Click = useCallback(() => {
    navigate("/about-us-page-desktop");
  }, [navigate]);

  const onTextButton3Click = useCallback(() => {
    navigate("/contact-page-desktop");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.coursesOpenPageDesktop}>
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
              <div className={styles.textButton2} onClick={onTextButton2Click}>
                Hakkımızda
              </div>
              <div className={styles.textButton2} onClick={onTextButton3Click}>
                İletişim
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer1}>
            <div className={styles.text}>Kayıt Ol</div>
            <div className={styles.button1} onClick={onButtonContainer1Click}>
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
        <div className={styles.heading3}>İleri Girişimcilik Eğitimi</div>
        <div className={styles.paragraph}>
          Tasarım ve geliştirme becerilerinizi geliştirebileceğiniz çevrimiçi
          kurs sayfamıza hoş geldiniz. Size kapsamlı bilgi ve pratik deneyim
          sunmak için tasarlanmış, özenle seçilmiş 10 kurs arasından seçim
          yapın. Aşağıdaki kursları keşfedin ve öğrenme yolculuğunuz için en
          uygun olanı bulun.
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.subContainer2}>
          <div className={styles.card}>
            <b className={styles.number}>01</b>
            <div className={styles.heading4}>
              Sistem Kullanımı (Oryantasyon)
            </div>
            <div className={styles.itemsContainer}>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>HTML5 Kullanımı</div>
                  <div className={styles.text4}>Ders 01</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>4 Dakika</div>
                </div>
              </div>
              <div className={styles.featureItem1}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>ePUB Kullanımı</div>
                  <div className={styles.text4}>Ders 02</div>
                </div>
                <div className={styles.container8}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>3 Dakika</div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>Ders Kitabı</div>
                  <div className={styles.text4}>Ders 03</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>12 Dakika</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <b className={styles.number}>02</b>
            <div className={styles.heading4}>
              Bölüm 9: Networking (Ağ Kurma)
            </div>
            <div className={styles.itemsContainer}>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Video 9.2: İş Kurarken ve Geliştirirken Networking Adımları
                  </div>
                  <div className={styles.text4}>Ders 01</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>22 Dakika</div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Video 9.1: Girişimcilikte Networking’in Önemi
                  </div>
                  <div className={styles.text4}>Ders 02</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>18 Dakika</div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Video 9.3: Girişimcinin Networking Paydaşları
                  </div>
                  <div className={styles.text4}>Ders 03</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>16 Dakika</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer3}>
          <div className={styles.card}>
            <b className={styles.number}>03</b>
            <div className={styles.heading4}>
              Bölüm 10: Girişimin Finansal Yapısının Belirlenmesi ve Yönetimi
            </div>
            <div className={styles.itemsContainer}>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Video 10.1: Girişimin Finansal Yapısının Belirlenmesi
                  </div>
                  <div className={styles.text4}>Ders 01</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>1 Hour</div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Video 10.2: Bütçeleme ve Tahmin
                  </div>
                  <div className={styles.text4}>Ders 02</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>1 Hour</div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.textContainer}>
                  <div className={styles.heading5}>
                    Bölüm 10 Sonu Değerlendirme Sınavı
                  </div>
                  <div className={styles.text4}>Ders 03</div>
                </div>
                <div className={styles.container7}>
                  <img className={styles.icon} alt="" src="/icon@2x.png" />
                  <div className={styles.text5}>1 Hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.button8}>
            <div className={styles.text22}>Daha Fazlası</div>
          </div>
        </div>
      </div>
      <div className={styles.container16}>
        <div className={styles.button9}>
          <img className={styles.icon16} alt="" src="/icon@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default CoursesOpenPageDesktop;
