import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePageDesktop1.module.css";

const HomePageDesktop1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextButton1Click = useCallback(() => {
    navigate("/courses-page-desktop");
  }, [navigate]);

  const onTextButton2Click = useCallback(() => {
    navigate("/about-us-page-desktop");
  }, [navigate]);

  const onTextButton3Click = useCallback(() => {
    navigate("/contact-page-desktop");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/sign-up-page-desktop");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/login-page-desktop");
  }, [navigate]);

  const onOurCoursesSectionClick = useCallback(() => {
    navigate("/courses-page-desktop");
  }, [navigate]);

  return (
    <div className={styles.homePageDesktop}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.iconContainer}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.heading}>
              <span className={styles.yaratc}>Yaratıcı</span>
              <span> Potansiyelinizin Kilidini Açın</span>
            </div>
            <img
              className={styles.abstractLineIcon}
              alt=""
              src="/abstract-line1@2x.png"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.heading1}>
              Çevrimiçi Tasarım ve Geliştirme Kursları ile.
            </div>
            <div className={styles.paragraph}>
              Sektör Uzmanlarından Öğrenin ve Becerilerinizi Geliştirin.
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <div className={styles.text}>Girtes’i Keşfedin</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.text1}>Kursları Görüntüle</div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.button2}>
          <img className={styles.icon1} alt="" src="/icon29@2x.png" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.topBanner}>
          <div className={styles.text2}>
            Ücretsiz Kurslar 🌟 Yakında Bitiyor, Hemen Alın
          </div>
          <img className={styles.icon2} alt="" src="/icon2@2x.png" />
        </div>
        <div className={styles.navbar}>
          <div className={styles.container2}>
            <img className={styles.logoIcon} alt="" src="/logo9@2x.png" />
            <div className={styles.buttonsContainer1}>
              <div className={styles.button3}>
                <div className={styles.textButton}>Anasayfa</div>
              </div>
              <div className={styles.textButton1} onClick={onTextButton1Click}>
                Kurslar
              </div>
              <div className={styles.textButton1} onClick={onTextButton2Click}>
                Hakkımızda
              </div>
              <div className={styles.textButton1} onClick={onTextButton3Click}>
                İletişim
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer2}>
            <div className={styles.textButton1} onClick={onText3Click}>
              Kayıt Ol
            </div>
            <div className={styles.button4} onClick={onButtonContainer4Click}>
              <div className={styles.textButton}>Giriş Yap</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.card}>
          <img className={styles.logoIcon1} alt="" src="/logo11@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon2} alt="" src="/logo12@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon3} alt="" src="/logo3@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon4} alt="" src="/logo13@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon5} alt="" src="/logo14@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon6} alt="" src="/logo15@2x.png" />
        </div>
        <div className={styles.line} />
        <div className={styles.card}>
          <img className={styles.logoIcon7} alt="" src="/logo7@2x.png" />
        </div>
      </div>
      <div className={styles.benefitsSection}>
        <div className={styles.container4}>
          <div className={styles.textContainer1}>
            <div className={styles.heading2}>Faydalar</div>
            <div className={styles.paragraph1}>
              Kursun faydaları şunları içerir: Katılımcılara yeni bilgi ve
              beceriler kazandırarak kişisel ve mesleki gelişimlerini destekler.
              Uzman eğitmenler rehberliğinde, pratik deneyimlerle öğrenme
              fırsatları sunar, ayrıca kursun tamamlanmasıyla sertifika alarak
              bu yeni yetenekleri resmileştirme şansı tanır.
            </div>
          </div>
          <div className={styles.button5}>
            <div className={styles.text1}>Hepsini gör</div>
          </div>
        </div>
        <div className={styles.container5}>
          <div className={styles.itemsContainer}>
            <div className={styles.card7}>
              <b className={styles.number}>01</b>
              <div className={styles.textContainer2}>
                <div className={styles.heading3}>Esnek Öğrenme Programı</div>
                <div className={styles.paragraph2}>
                  Kurs çalışmalarınızı mevcut taahhütlerinize ve
                  yükümlülüklerinize uygun hale getirin.
                </div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
            <div className={styles.card7}>
              <b className={styles.number}>02</b>
              <div className={styles.textContainer2}>
                <div className={styles.heading3}>Uzman Eğitimi</div>
                <div className={styles.paragraph2}>
                  Tasarım ve geliştirme konusunda uygulamalı deneyime sahip
                  endüstri uzmanlarından bilgi edinin.
                </div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
            <div className={styles.card7}>
              <b className={styles.number}>03</b>
              <div className={styles.textContainer2}>
                <div className={styles.heading3}>Çeşitli Kurs Teklifleri</div>
                <div className={styles.paragraph2}>
                  Çeşitli konuları kapsayan çok çeşitli tasarım ve geliştirme
                  kurslarını keşfedin.
                </div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            <div className={styles.card7}>
              <b className={styles.number}>04</b>
              <div className={styles.textContainer2}>
                <div className={styles.heading3}>Güncellenmiş Müfredat</div>
                <div className={styles.paragraph2}>
                  En son trendleri ve sektör uygulamalarını yansıtan güncel
                  içeriğe sahip kurslara erişin.
                </div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
            <div className={styles.card7}>
              <b className={styles.number}>05</b>
              <div className={styles.textContainer2}>
                <div
                  className={styles.heading3}
                >{`Pratik Projeler ve Ödevler `}</div>
                <div className={styles.paragraph2}>
                  Potansiyel işverenlere becerilerinizi ve yeteneklerinizi
                  sergileyen bir portföy geliştirin.
                </div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
            <div className={styles.card7}>
              <b className={styles.number}>06</b>
              <div className={styles.textContainer2}>
                <div className={styles.heading3}>İnteraktif Öğrenme Ortamı</div>
                <div
                  className={styles.paragraph2}
                >{`Anlayışınızı geliştirmek için diğer öğrencilerle işbirliği yapın, fikir alışverişinde bulunun ve geri bildirimde bulunun. `}</div>
              </div>
              <div className={styles.button6}>
                <img className={styles.icon} alt="" src="/icon30@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.ourCoursesSection}
        onClick={onOurCoursesSectionClick}
      >
        <div className={styles.container4}>
          <div className={styles.textContainer1}>
            <div className={styles.heading2}>Kurslarımız</div>
            <div className={styles.paragraph1}>
              Her seviyeden katılımcıya hitap eden bu kurslar, pratik
              deneyimlerle desteklenerek etkili bir öğrenme deneyimi sunar.
              Geniş yelpazede yer alan konular arasında kişisel gelişim,
              teknoloji, sanat, iş dünyası ve daha birçok alan bulunmaktadır.
            </div>
          </div>
          <div className={styles.button5}>
            <div className={styles.text6}>Hepsini gör</div>
          </div>
        </div>
        <div className={styles.container7}>
          <div className={styles.itemsContainer2}>
            <div className={styles.card13}>
              <div className={styles.container8}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image14@2x.png"
                />
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.subContainer2}>
                      <div className={styles.container10}>
                        <div className={styles.text7}>1 Hafta</div>
                      </div>
                      <div className={styles.container10}>
                        <div className={styles.text7}>Acemi</div>
                      </div>
                    </div>
                    <div className={styles.name}>By Kosgeb</div>
                  </div>
                  <div className={styles.textContainer9}>
                    <div className={styles.heading2}>
                      Geleneksel Girişimcilik Eğitimi
                    </div>
                    <div className={styles.paragraph2}>
                      Geleneksel Girişimci Eğitimi, girişimcilerin iş kurma ve
                      yürütme konusunda bilgi sahibi olmaları, bu süreçte rol ve
                      sorumluluklarının farkına varmaları ve iş fikirlerine
                      yönelik iş modelini...
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.text1}>Şimdi sahip ol</div>
              </div>
            </div>
            <div className={styles.card14}>
              <div className={styles.container8}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image15@2x.png"
                />
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.subContainer2}>
                      <div className={styles.container10}>
                        <div className={styles.text7}>2 Hafta</div>
                      </div>
                      <div className={styles.container10}>
                        <div className={styles.text7}>Orta ve İleri</div>
                      </div>
                    </div>
                    <div className={styles.name1}>By Kosgeb</div>
                  </div>
                  <div className={styles.textContainer9}>
                    <div className={styles.heading2}>
                      İleri Girişimcilik Eğitimi
                    </div>
                    <div className={styles.paragraph2}>
                      <p className={styles.leriGiriimciEitimi}>
                        İleri Girişimci Eğitimi yenilikçi, orta yüksek/ileri
                        teknoloji düzeyindeki sektörler ile imalat sektöründe
                        faaliyet gösterecek girişimcilerin ihtiyaç
                        duyabilecekleri bilgilerin kazandırılması
                        amaçlanmaktadır. “İleri Girişimci Programı Faaliyet
                        Konuları
                      </p>
                      <p className={styles.leriGiriimciEitimi}>...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.text1}>{`Şimdi sahip ol `}</div>
              </div>
            </div>
          </div>
          <div className={styles.itemsContainer2}>
            <div className={styles.card13}>
              <div className={styles.container8}>
                <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.subContainer2}>
                      <div className={styles.container10}>
                        <div className={styles.text7}>8 Hafta</div>
                      </div>
                      <div className={styles.container10}>
                        <div className={styles.text7}>Orta seviye</div>
                      </div>
                    </div>
                    <div className={styles.name1}>By BTK Akademi</div>
                  </div>
                  <div className={styles.textContainer9}>
                    <div className={styles.heading2}>
                      Mobil Uygulama Geliştirme
                    </div>
                    <div className={styles.paragraph2}>
                      Mobil uygulama geliştirme dünyasına dalın. Swift ve Kotlin
                      gibi sektör lideri çerçeveleri kullanarak yerel iOS ve
                      Android uygulamaları oluşturmayı öğrenin.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.text1}>Şimdi sahip ol</div>
              </div>
            </div>
            <div className={styles.card14}>
              <div className={styles.container8}>
                <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.subContainer2}>
                      <div className={styles.container10}>
                        <div className={styles.text7}>10 Hafta</div>
                      </div>
                      <div className={styles.container10}>
                        <div className={styles.text7}>Acemi</div>
                      </div>
                    </div>
                    <div className={styles.name1}>By BTK Akademi</div>
                  </div>
                  <div className={styles.textContainer9}>
                    <div className={styles.heading2}>
                      Yeni Başlayanlar İçin Grafik Tasarım
                    </div>
                    <div className={styles.paragraph2}>
                      Tipografi, renk teorisi, düzen tasarımı ve görüntü işleme
                      teknikleri dahil olmak üzere grafik tasarımın temellerini
                      keşfedin. Basılı ve dijital medya için görsel açıdan
                      etkileyici tasarımlar oluşturun.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.text1}>Şimdi sahip ol</div>
              </div>
            </div>
          </div>
          <div className={styles.itemsContainer4}>
            <div className={styles.card17}>
              <div className={styles.button17}>
                <div className={styles.text1}>Daha Fazlası</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialsSection}>
        <div className={styles.container4}>
          <div className={styles.textContainer1}>
            <div className={styles.heading2}>Referanslarımız</div>
            <div className={styles.paragraph1}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </div>
          </div>
          <div className={styles.button5}>
            <div className={styles.text1}>View All</div>
          </div>
        </div>
        <div className={styles.container7}>
          <div className={styles.itemsContainer2}>
            <div className={styles.card18}>
              <div className={styles.container26}>
                <div className={styles.paragraph14}>
                  Web tasarım kursu bana sağlam bir temel sağladı. Eğitmenler
                  bilgili ve destekleyiciydi ve etkileşimli öğrenme ortamı ilgi
                  çekiciydi. Şiddetle tavsiye ederim!
                </div>
              </div>
              <div className={styles.line6} />
              <div className={styles.container27}>
                <div className={styles.subContainer9}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image4@2x.png"
                  />
                  <div className={styles.name4}>Sabiha L</div>
                </div>
                <div className={styles.button19}>
                  <div className={styles.text1}>Tamamını Okuyun</div>
                </div>
              </div>
            </div>
            <div className={styles.card18}>
              <div className={styles.container26}>
                <div className={styles.paragraph14}>
                  UI/UX tasarım kursu beklentilerimi aştı. Eğitmenin uzmanlığı
                  ve pratik ödevleri tasarım becerilerimi geliştirmeme yardımcı
                  oldu. Artık kariyerime daha çok güveniyorum. Teşekkür ederim!
                </div>
              </div>
              <div className={styles.line6} />
              <div className={styles.container27}>
                <div className={styles.subContainer9}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image5@2x.png"
                  />
                  <div className={styles.name4}>Ali M</div>
                </div>
                <div className={styles.button19}>
                  <div className={styles.text1}>Tamamını Okuyun</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itemsContainer2}>
            <div className={styles.card18}>
              <div className={styles.container26}>
                <div className={styles.paragraph14}>
                  Mobil uygulama geliştirme kursu muhteşemdi! Adım adım
                  eğitimler ve uygulamalı projeler kavramları kolayca kavramama
                  yardımcı oldu. Şimdi kendi uygulamamı geliştiriyorum. Harika
                  kurs!
                </div>
              </div>
              <div className={styles.line6} />
              <div className={styles.container27}>
                <div className={styles.subContainer9}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className={styles.name4}>Emine R</div>
                </div>
                <div className={styles.button19}>
                  <div className={styles.text1}>Tamamını Okuyun</div>
                </div>
              </div>
            </div>
            <div className={styles.card18}>
              <div className={styles.container26}>
                <div className={styles.paragraph14}>
                  Grafik tasarım kursuna yeni başlayan biri olarak kaydoldum ve
                  bu mükemmel bir başlangıç ​​noktasıydı. Eğitmenin rehberliği
                  ve geri bildirimi tasarım becerilerimi önemli ölçüde
                  geliştirdi. Bu kurs için minnettarım!
                </div>
              </div>
              <div className={styles.line6} />
              <div className={styles.container27}>
                <div className={styles.subContainer9}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image7@2x.png"
                  />
                  <div className={styles.name4}>Mikail K</div>
                </div>
                <div className={styles.button19}>
                  <div className={styles.text1}>Tamamını Okuyun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqSection}>
        <div className={styles.container34}>
          <div className={styles.textContainer14}>
            <div className={styles.heading15}>Sıkça Sorulan Sorular</div>
            <div className={styles.text25}>
              Hala sorularınız mı var? support@btkakademi.com aracılığıyla
              Ekibimizle iletişime geçin
            </div>
          </div>
          <div className={styles.button23}>
            <div className={styles.text1}>Tüm SSS'leri Görün</div>
          </div>
        </div>
        <div className={styles.itemsContainer7}>
          <div className={styles.card22}>
            <div className={styles.container35}>
              <div className={styles.heading16}>
                Aynı anda birden fazla kursa kayıt olabilir miyim?
              </div>
              <div className={styles.button24}>
                <img className={styles.icon9} alt="" src="/icon31@2x.png" />
              </div>
            </div>
            <div className={styles.paragraph18}>
              Kesinlikle! Aynı anda birden fazla kursa kayıt olabilir ve
              istediğiniz zaman bu kurslara erişebilirsiniz.
            </div>
            <div className={styles.subContainer13}>
              <div className={styles.heading16}>
                Farklı Kurslara Kayıt Süreci
              </div>
              <div className={styles.button25}>
                <img className={styles.icon9} alt="" src="/icon5@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.card23}>
            <div className={styles.heading16}>
              Eğitmenlerden ne tür bir destek bekleyebilirim?
            </div>
            <div className={styles.button24}>
              <img className={styles.icon9} alt="" src="/icon6@2x.png" />
            </div>
          </div>
          <div className={styles.card23}>
            <div className={styles.heading16}>
              Kursların hızı kendiniz mi belirleniyor yoksa belirli başlangıç
              ​​ve bitiş tarihleri ​​var mı?
            </div>
            <div className={styles.button24}>
              <img className={styles.icon9} alt="" src="/icon6@2x.png" />
            </div>
          </div>
          <div className={styles.card23}>
            <div className={styles.heading16}>
              Derslerin herhangi bir önkoşulu var mı?
            </div>
            <div className={styles.button24}>
              <img className={styles.icon9} alt="" src="/icon6@2x.png" />
            </div>
          </div>
          <div className={styles.card23}>
            <div
              className={styles.heading16}
            >{`Ders materyallerini çevrimdışı erişim için indirebilir miyim? `}</div>
            <div className={styles.button24}>
              <img className={styles.icon9} alt="" src="/icon6@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.container36}>
          <div className={styles.subContainer14}>
            <img className={styles.logoIcon} alt="" src="/logo10@2x.png" />
            <div className={styles.buttonsContainer3}>
              <div className={styles.button30}>
                <img className={styles.icon2} alt="" src="/icon7@2x.png" />
                <div className={styles.textButton}>hello@girtes.com</div>
              </div>
              <div className={styles.button30}>
                <img className={styles.icon2} alt="" src="/icon8@2x.png" />
                <div className={styles.textButton}>+90 850 000 0000</div>
              </div>
              <div className={styles.button30}>
                <img className={styles.icon2} alt="" src="/icon9@2x.png" />
                <div className={styles.textButton}>
                  Türkiye, Ankara Gençlik Spor Bakanlığı
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subContainer15}>
            <div className={styles.container37}>
              <div className={styles.heading2}>Anasayfa</div>
              <div className={styles.buttonsContainer4}>
                <div className={styles.textButton7}>Faydalar</div>
                <div className={styles.textButton7}>Kurslarımız</div>
                <div className={styles.textButton7}>Referanslarımız</div>
                <div className={styles.textButton7}>SSS'miz</div>
              </div>
            </div>
            <div className={styles.container37}>
              <div className={styles.heading2}>Hakkımızda</div>
              <div className={styles.buttonsContainer4}>
                <div className={styles.textButton7}>Şirket</div>
                <div className={styles.textButton7}>Başarılar</div>
                <div className={styles.textButton7}>Hedeflerimiz</div>
              </div>
            </div>
            <div className={styles.container37}>
              <div className={styles.heading2}>Sosyal Medya</div>
              <div className={styles.buttonsContainer6}>
                <div className={styles.button33}>
                  <img className={styles.icon2} alt="" src="/icon10@2x.png" />
                </div>
                <div className={styles.button33}>
                  <img className={styles.icon2} alt="" src="/icon13@2x.png" />
                </div>
                <div className={styles.button33}>
                  <img className={styles.icon2} alt="" src="/icon12@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line6} />
        <div className={styles.text27}>
          © 2023 Girtes.Com . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default HomePageDesktop1;
