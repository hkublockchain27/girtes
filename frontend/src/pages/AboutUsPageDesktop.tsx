import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUsPageDesktop.module.css";

const AboutUsPageDesktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.aboutUsPageDesktop}>
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
        <div className={styles.heading3}>Girtes Hakkında</div>
        <div className={styles.paragraph}>
          Bireylerin tasarım ve geliştirme dünyasına hakim olmalarını sağlama
          konusunda tutkulu olduğumuz platformumuza hoş geldiniz. Öğrencileri
          sürekli gelişen dijital ortamda başarılı olmak için gereken bilgi ve
          becerilerle donatmak üzere tasarlanmış çok çeşitli çevrimiçi kurslar
          sunuyoruz.
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.textContainer}>
          <div className={styles.heading4}>Hedeflerimiz</div>
          <div className={styles.paragraph1}>
            SkillBridge'de amacımız, tasarım ve geliştirme dünyasında başarılı
            olmaları için her kökenden bireyleri güçlendirmektir. Eğitimin
            erişilebilir ve dönüştürücü olması, öğrencilerin tutkularının
            peşinden gitmesine ve anlamlı bir etki yaratmasına olanak sağlaması
            gerektiğine inanıyoruz. Özenle hazırlanmış kurslarımız aracılığıyla
            şunları hedefliyoruz:
          </div>
        </div>
        <div className={styles.subContainer2}>
          <div className={styles.container7}>
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.objectsTools}
                  alt=""
                  src="/objects--tools@2x.png"
                />
              </div>
              <div className={styles.textContainer1}>
                <div className={styles.heading4}>Pratik Beceriler Sağlayın</div>
                <div className={styles.paragraph2}>
                  Mevcut endüstri taleplerine uygun pratik beceriler sunmaya
                  odaklanıyoruz. Kurslarımız, öğrencileri seçtikleri alanda
                  başarılı olmaları için gereken bilgi ve araçlarla donatmak
                  için tasarlanmıştır.
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.objectsTools}
                  alt=""
                  src="/objects--tools@2x.png"
                />
              </div>
              <div className={styles.textContainer1}>
                <div className={styles.heading4}>
                  Yaratıcı Problem Çözmeyi Destekleyin
                </div>
                <div className={styles.paragraph2}>
                  Yaratıcı düşünmeyi ve problem çözme yeteneklerini teşvik
                  ederek öğrencilerimizin gerçek dünyadaki zorluklarla güvenle
                  ve yenilikçi bir şekilde başa çıkmalarına olanak sağlıyoruz.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container7}>
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.objectsTools}
                  alt=""
                  src="/objects--tools@2x.png"
                />
              </div>
              <div className={styles.textContainer1}>
                <div className={styles.heading4}>
                  İşbirliğini ve Topluluğu Teşvik Edin
                </div>
                <div className={styles.paragraph4}>
                  İşbirliğinin ve akran öğreniminin gücüne inanıyoruz.
                  Platformumuz, öğrencilerin bağlantı kurabileceği, içgörülerini
                  paylaşabileceği ve birlikte büyüyebileceği destekleyici ve
                  kapsayıcı bir topluluğu teşvik eder.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.objectsTools}
                  alt=""
                  src="/objects--tools@2x.png"
                />
              </div>
              <div className={styles.textContainer1}>
                <div className={styles.heading4}>Eğrinin Önünde Kalın</div>
                <div className={styles.paragraph4}>
                  Dijital ortam sürekli gelişiyor ve biz sektör trendlerinin ön
                  saflarında yer almaya çalışıyoruz. Öğrencilerimizin en yeni
                  bilgi ve becerileri kazanmasını sağlamak için kurs içeriğimizi
                  düzenli olarak güncelliyoruz.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <div className={styles.textContainer5}>
            <img
              className={styles.abstractDesignIcon}
              alt=""
              src="/abstract-design@2x.png"
            />
            <div className={styles.heading9}>
              Dijital inovasyonun geleceğini birlikte şekillendirelim
            </div>
            <div className={styles.paragraph6}>
              Bu heyecan verici öğrenme yolculuğunda bize katılın ve tasarım ve
              geliştirmedeki potansiyelinizi ortaya çıkarın.
            </div>
          </div>
          <div className={styles.button8}>
            <div className={styles.text4}>Katıl</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageDesktop;
