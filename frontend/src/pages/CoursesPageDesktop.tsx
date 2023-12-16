import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursesPageDesktop.module.css";

const CoursesPageDesktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home-page-desktop");
  }, [navigate]);

  const onTextButton2Click = useCallback(() => {
    navigate("/about-us-page-desktop");
  }, [navigate]);

  const onTextButton3Click = useCallback(() => {
    navigate("/contact-page-desktop");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  const onContainer11Click = useCallback(() => {
    navigate("/courses-open-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.coursesPageDesktop}>
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
              <div className={styles.button} onClick={onButtonContainerClick}>
                <div className={styles.textButton}>Anasayfa</div>
              </div>
              <div className={styles.textButton}>Kurslar</div>
              <div className={styles.textButton2} onClick={onTextButton2Click}>
                Hakkımızda
              </div>
              <div className={styles.textButton2} onClick={onTextButton3Click}>
                İletişim
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer1}>
            <div className={styles.textButton}>Kayıt Ol</div>
            <div className={styles.button1} onClick={onButtonContainer1Click}>
              <div className={styles.textButton}>Giriş Yap</div>
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
                <div className={styles.textButton}>hello@girtes.com</div>
              </div>
              <div className={styles.button2}>
                <img className={styles.icon} alt="" src="/icon8@2x.png" />
                <div className={styles.textButton}>+90 850 000 0000</div>
              </div>
              <div className={styles.button2}>
                <img className={styles.icon} alt="" src="/icon9@2x.png" />
                <div className={styles.textButton}>
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
        <div className={styles.heading3}>
          Tasarım ve Geliştirmeye İlişkin Çevrimiçi Kurslar
        </div>
        <div className={styles.paragraph}>
          Tasarım ve geliştirme becerilerinizi geliştirebileceğiniz çevrimiçi
          kurs sayfamıza hoş geldiniz. Size kapsamlı bilgi ve pratik deneyim
          sunmak için tasarlanmış, özenle seçilmiş 10 kurs arasından seçim
          yapın. Aşağıdaki kursları keşfedin ve öğrenme yolculuğunuz için en
          uygun olanı bulun.
        </div>
      </div>
      <div className={styles.container6} onClick={onContainer11Click}>
        <div className={styles.subContainer2}>
          <div className={styles.container7}>
            <div className={styles.subContainer3}>
              <div className={styles.textContainer}>
                <div className={styles.heading}>Web Tasarımının Temelleri</div>
                <div className={styles.paragraph1}>
                  HTML, CSS ve duyarlı tasarım ilkeleri dahil olmak üzere web
                  tasarımının temellerini öğrenin. Görsel olarak çekici ve
                  kullanıcı dostu web siteleri oluşturma becerilerini
                  geliştirin.
                </div>
              </div>
              <div className={styles.button8}>
                <div className={styles.text4}>Kursu Görüntüle</div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.subContainer4}>
              <div className={styles.container8}>
                <div className={styles.subContainer5}>
                  <div className={styles.text5}>4 Hafta</div>
                </div>
                <div className={styles.subContainer5}>
                  <div className={styles.text5}>Acemi</div>
                </div>
              </div>
              <div className={styles.name}>By BTK Akademi</div>
            </div>
          </div>
          <div className={styles.container9}>
            <div className={styles.subContainer7}>
              <div className={styles.heading3}>Müfredat</div>
            </div>
            <div className={styles.subContainer8}>
              <div className={styles.featureItem}>
                <div className={styles.number}>01</div>
                <div className={styles.text7}>HTML'ye giriş</div>
              </div>
              <div className={styles.line1} />
              <div className={styles.featureItem}>
                <div className={styles.number}>02</div>
                <div className={styles.text7}>CSS ile stillendirme</div>
              </div>
              <div className={styles.line1} />
              <div className={styles.featureItem}>
                <div className={styles.number}>03</div>
                <div className={styles.text7}>Duyarlı Tasarıma Giriş</div>
              </div>
              <div className={styles.line1} />
              <div className={styles.featureItem}>
                <div className={styles.number}>04</div>
                <div className={styles.text7}>Web İçin Tasarım İlkeleri</div>
              </div>
              <div className={styles.line1} />
              <div className={styles.featureItem}>
                <div className={styles.number}>05</div>
                <div className={styles.text7}>
                  Temel Bir Web Sitesi Oluşturmak
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer9}>
          <div className={styles.container7}>
            <div className={styles.subContainer3}>
              <div className={styles.textContainer}>
                <div className={styles.heading}>İleri Girişimcilik Eğitimi</div>
                <div className={styles.paragraph2}>
                  <p className={styles.leriGiriimciEitimi}>
                    İleri Girişimci Eğitimi yenilikçi, orta yüksek/ileri
                    teknoloji düzeyindeki sektörler ile imalat sektöründe
                    faaliyet gösterecek girişimcilerin ihtiyaç duyabilecekleri
                    bilgilerin kazandırılması amaçlanmaktadır. “İleri Girişimci
                    Programı Faaliyet Konuları
                  </p>
                  <p className={styles.leriGiriimciEitimi}>...</p>
                </div>
              </div>
              <div className={styles.button8}>
                <div className={styles.text4}>Kursu Görüntüle</div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.subContainer4}>
              <div className={styles.container8}>
                <div className={styles.subContainer5}>
                  <div className={styles.text5}>6 Hafta</div>
                </div>
                <div className={styles.subContainer5}>
                  <div className={styles.text5}>Orta</div>
                </div>
              </div>
              <div className={styles.name}>By Emily Johnson</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPageDesktop;
