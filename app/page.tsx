"use client";

import { useEffect, useRef, useState } from "react";

const SKILLS = [
  "PHP","CodeIgniter","MySQL","HTML","CSS","JavaScript",
  "Microsoft Excel","Microsoft Word","Linux","Windows","macOS",
  "Git","Data Entry","Web Development","IT Support","Administration",
  "PHP","CodeIgniter","MySQL","HTML","CSS","JavaScript",
  "Microsoft Excel","Microsoft Word","Linux","Windows","macOS",
  "Git","Data Entry","Web Development","IT Support","Administration",
];

const SERVICES = [
  { num:"01", title:"IT Support", desc:"Instalasi, konfigurasi, dan perbaikan sistem Windows, macOS, dan Linux. Troubleshoot dari hardware sampai software." },
  { num:"02", title:"Web Development", desc:"Membangun website dengan PHP, HTML, CSS, dan CodeIgniter. Full-stack dari desain UI sampai database MySQL." },
  { num:"03", title:"Data Management", desc:"Pengelolaan data administratif, data entry, pembersihan data, dan pelaporan menggunakan Microsoft Excel." },
  { num:"04", title:"Administrasi Digital", desc:"Pengelolaan dokumen, korespondensi, dan layanan administrasi digital untuk kantor maupun organisasi." },
  { num:"05", title:"Database MySQL", desc:"Perancangan dan pengelolaan database relasional untuk aplikasi web dan sistem informasi." },
  { num:"06", title:"Sistem Informasi Web", desc:"Pembangunan sistem informasi berbasis web yang memudahkan pengelolaan dan akses data secara online." },
];

const PORTFOLIO = [
  {
    num:"01", title:"Sistem Informasi Desa Maronge",
    desc:"Sistem informasi berbasis web untuk Kantor Desa Maronge — berita desa, pengumuman, peta interaktif, dan data kependudukan.",
    tags:["PHP","CodeIgniter","MySQL","HTML","CSS"], repo:true, demo:false,
  },
  {
    num:"02", title:"Portal Administrasi Desa",
    desc:"Fitur administrasi digital untuk mempermudah warga mengajukan permohonan surat dan dokumen resmi secara online.",
    tags:["PHP","MySQL","HTML"], repo:false, demo:false,
  },
  {
    num:"03", title:"Dashboard Laporan Excel",
    desc:"Template dashboard Excel dengan formula SUM, AVERAGE, COUNT untuk pelaporan data kunjungan dan komitmen pembayaran.",
    tags:["Microsoft Excel","Data Analysis"], repo:false, demo:false,
  },
];

const EXPERIENCES = [
  {
    role:"Remedial Field Officer", title:"Remedial Field",
    company:"FIFGROUP — Sumbawa, Indonesia", period:"Jan 2026 – Sekarang",
    desc:"Menangani tindak lanjut lapangan atas akun pelanggan yang menunggak pembayaran cicilan.",
    bullets:[
      "Melakukan kunjungan lapangan ke pelanggan untuk negosiasi settlement dan rencana pembayaran.",
      "Berkoordinasi dengan tim cabang untuk memantau dan memperbarui status kasus remedial/koleksi.",
      "Memelihara catatan akurat hasil kunjungan dan komitmen pembayaran untuk keperluan pelaporan.",
    ],
  },
  {
    role:"IT Support", title:"IT Support",
    company:"PT Bumi Daya Plaza at BNI — Sumbawa, Indonesia", period:"Sep 2025 – Des 2025",
    desc:"Memberikan dukungan teknis dengan kemampuan teknis kuat, pemecahan masalah cepat, dan komunikasi efektif.",
    bullets:[
      "Profisien dalam instalasi, konfigurasi, dan perbaikan sistem Windows, macOS, dan Linux.",
      "Mereview, memprioritaskan, dan menyelesaikan laporan kerusakan dari pengguna berdasarkan tingkat urgensi.",
    ],
  },
  {
    role:"Full-Stack Developer", title:"Proyek Capstone / Mandiri",
    company:"Sistem Informasi Desa Maronge — Sumbawa, Indonesia", period:"Okt 2022 – Jan 2023",
    desc:"Membangun sistem informasi berbasis web untuk Kantor Desa Maronge agar informasi lebih mudah diakses masyarakat.",
    bullets:[
      "Merancang dan membangun sistem menggunakan PHP, HTML, CSS, CodeIgniter, dan MySQL.",
      "Mengembangkan fitur berita desa, pengumuman, peta interaktif, dan data kependudukan.",
      "Menghasilkan sistem berjalan yang mempermudah warga mengakses informasi desa secara online.",
    ],
  },
  {
    role:"Administrative Data & Digital Services Intern", title:"Magang Merdeka Belajar",
    company:"Kantor Desa Maronge — Sumbawa, Indonesia", period:"Okt 2022 – Jan 2023",
    desc:"Kantor pemerintah desa di Sumbawa yang bertanggung jawab atas layanan administrasi publik dan digitalisasi lokal.",
    bullets:[
      "Merekam dan memelihara data administrasi desa dengan akurasi dan ketepatan waktu yang tinggi.",
      "Memproses surat masuk dan keluar serta mendukung pengarsipan dokumen kantor.",
      "Memberikan layanan langsung kepada masyarakat yang memerlukan surat dan dokumen resmi.",
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [startupHidden, setStartupHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaderChars, setLoaderChars] = useState<boolean[]>(Array(7).fill(false));
  const portScrollRef = useRef<HTMLDivElement>(null);
  const NAME_CHARS = ["A","B","I","G","A","I","L"];

  useEffect(() => {
    NAME_CHARS.forEach((_, i) => {
      setTimeout(() => {
        setLoaderChars(prev => { const n=[...prev]; n[i]=true; return n; });
      }, i * 80 + 100);
    });
    setTimeout(() => setStartupHidden(true), 1800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const el = document.documentElement;
      setScrollProgress((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add("visible");
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPort = (dir: number) => {
    portScrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <>
      <div className={`startup${startupHidden ? " hidden" : ""}`}>
        <div className="startup-content">
          <div className="loader">
            {NAME_CHARS.map((c,i) => (
              <span key={i} className={`loader-char${loaderChars[i] ? " show" : ""}`} style={{transitionDelay:`${i*.08}s`}}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-progress" style={{width:`${scrollProgress}%`}} />

      <a href="https://wa.me/6285337489141" className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.2l6.076-1.97A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.6c-.39 1.1-1.932 2.014-3.158 2.28-.84.18-1.936.324-5.626-1.21-4.724-1.96-7.762-6.76-7.996-7.074-.226-.314-1.896-2.524-1.896-4.814s1.2-3.414 1.626-3.882c.39-.428.936-.564 1.246-.564.15 0 .284.008.406.014.416.018.624.042.896.674.35.796 1.194 2.906 1.298 3.12.104.214.208.516.062.812-.136.314-.272.51-.52.812-.248.3-.504.668-.716.894-.214.226-.42.468-.176.864.242.396 1.076 1.776 2.306 2.882 1.586 1.424 2.842 1.876 3.34 2.074.39.156.828.1 1.126-.226.378-.418.844-1.106 1.318-1.778.336-.472.764-.53 1.146-.358.386.17 2.434 1.148 2.852 1.358.418.21.696.314.8.49.102.176.102 1.016-.288 2.114z"/>
        </svg>
        <span className="wa-pulse"/>
      </a>

      <nav className={`nav${scrolled?" scrolled":""}`}>
        <div className="container">
          <a href="#" className="nav-logo">Abigail<em>.</em></a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#layanan">Layanan</a></li>
              <li><a href="#portofolio">Portofolio</a></li>
              <li><a href="#pengalaman">Pengalaman</a></li>
              <li><a href="#kontak" className="nav-link-accent">Hubungi Saya</a></li>
            </ul>
            <button className={`nav-hamburger${menuOpen?" open":""}`} aria-label="Toggle menu" onClick={()=>setMenuOpen(v=>!v)}>
              <span/><span/>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen?" open":""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-links">
            {(["#tentang","#layanan","#portofolio","#pengalaman"] as const).map((href,i)=>(
              <a key={href} href={href} style={{transitionDelay:`${i*.06}s`}} onClick={()=>setMenuOpen(false)}>
                {["Tentang","Layanan","Portofolio","Pengalaman"][i]}
              </a>
            ))}
            <a href="#kontak" className="mobile-menu-cta" onClick={()=>setMenuOpen(false)}>Kontak</a>
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="hero">
          <video className="hero-video" muted playsInline preload="auto" poster="/poster.jpg" autoPlay loop>
            <source src="/hero-bg.mp4" type="video/mp4"/>
          </video>
          <div className="hero-overlay"/>
          <div className="container">
            <div className="hero-content">
              <p className="hero-tag">Informatics Graduate &amp; IT Professional</p>
              <h1>Abigail<br/>Perkasa</h1>
              <p className="hero-sub">Membangun solusi digital yang bermanfaat — dari sistem informasi desa sampai IT support.</p>
              <div className="hero-btns">
                <a href="#portofolio" className="btn btn-white">Lihat Karya</a>
                <a href="#kontak" className="btn btn-outline-w">Hubungi Saya</a>
              </div>
            </div>
          </div>
        </section>

        <div className="page-curtain">
          <section className="about" id="tentang">
            <div className="container">
              <div className="about-grid">
                <div className="about-left reveal">
                  <span className="label label-accent">Tentang Saya</span>
                  <h2>IT bukan cuma soal komputer, tapi soal bagaimana teknologi <em>memudahkan hidup orang</em>.</h2>
                  <div className="about-stats">
                    <div className="about-stat"><strong>3+</strong><span>Tahun Pengalaman</span></div>
                    <div className="about-stat"><strong>3.71</strong><span>IPK Cum Laude</span></div>
                    <div className="about-stat"><strong>S1</strong><span>Teknik Informatika</span></div>
                  </div>
                </div>
                <div className="about-right reveal">
                  <p>Saya adalah lulusan Teknik Informatika dari Universitas Teknologi Sumbawa (IPK 3.71/4.00, Cum Laude) dengan pengalaman langsung di IT support, administrasi data digital, dan pengembangan sistem informasi berbasis web.</p>
                  <p><strong>Keahlian teknis:</strong> PHP, CodeIgniter, MySQL untuk web development — ditambah kemampuan kuat di Microsoft Excel dan Word untuk kebutuhan data dan administrasi.</p>
                  <p>Saat ini bekerja sebagai Remedial Field Officer di FIFGROUP, sambil tetap terbuka untuk peluang di bidang IT support, administrasi, atau data management. Percaya bahwa detail kecil yang konsisten menghasilkan pekerjaan berkualitas tinggi.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="marquee">
            <div className="marquee-track">
              {SKILLS.map((s,i)=>(
                <span key={i} className="marquee-item">{s}<span className="marquee-dot">•</span></span>
              ))}
            </div>
          </section>

          <section className="services" id="layanan">
            <div className="container">
              <div className="section-hdr reveal">
                <span className="label label-accent">Layanan</span>
                <h2>Apa yang saya bisa bantu</h2>
                <p>Fokus di IT support, web development, dan pengelolaan data. Solusi tepat sasaran untuk kebutuhan digital Anda.</p>
              </div>
              <div className="svc-grid">
                {SERVICES.map(s=>(
                  <div className="svc-item reveal" key={s.num}>
                    <span className="svc-num">{s.num}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="portfolio" id="portofolio">
            <div className="container">
              <div className="section-hdr">
                <span className="label label-accent">Portofolio</span>
                <h2>Proyek yang pernah saya kerjakan</h2>
                <p style={{marginTop:10,maxWidth:460}}>Dari sistem informasi desa sampai dashboard data, semua dikerjakan untuk solve masalah nyata.</p>
              </div>
              <div className="portfolio-nav">
                <button className="port-nav-btn" aria-label="Scroll kiri" onClick={()=>scrollPort(-1)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button className="port-nav-btn" aria-label="Scroll kanan" onClick={()=>scrollPort(1)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
              <div className="port-scroll" ref={portScrollRef}>
                {PORTFOLIO.map(p=>(
                  <div className="port-card" key={p.num}>
                    <div className="port-card-body">
                      <div className="port-num">{p.num}</div>
                      <h3>{p.title}</h3>
                      <p className="port-desc">{p.desc}</p>
                      <div className="port-tags">
                        {p.tags.map(t=><span className="port-tag" key={t}>{t}</span>)}
                      </div>
                      <div className="port-links">
                        <span className="port-link"><span className={`port-link-dot ${p.repo?"yes":"no"}`}/>{p.repo?"Repository":"Private"}</span>
                        <span className="port-link"><span className={`port-link-dot ${p.demo?"yes":"no"}`}/>{p.demo?"Live Demo":"Tidak Tersedia"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="experience" id="pengalaman">
            <div className="container">
              <div className="section-hdr reveal">
                <span className="label label-accent">Pengalaman</span>
                <h2>Perjalanan karier saya</h2>
                <p>Dari magang pemerintahan sampai IT support perbankan — setiap peran mengajarkan sesuatu yang berharga.</p>
              </div>
              <div className="exp-list">
                {EXPERIENCES.map((e,i)=>(
                  <div className="exp-item reveal" key={i}>
                    <div>
                      <div className="exp-role">{e.role}</div>
                      <div className="exp-title">{e.title}</div>
                      <p className="exp-desc">{e.desc}</p>
                      <ul className="exp-bullets">{e.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
                    </div>
                    <div className="exp-meta">
                      <div className="exp-period">{e.period}</div>
                      <div className="exp-company">{e.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact" id="kontak">
            <div className="container">
              <div className="section-hdr reveal">
                <span className="label label-accent">Kontak</span>
                <h2>Mari berdiskusi</h2>
                <p style={{marginTop:10,maxWidth:460}}>Kirim pesan, saya akan balas secepatnya. Terbuka untuk peluang IT support, administrasi, atau data-related.</p>
              </div>
              <div className="contact-grid">
                <div>
                  <div className="contact-channels">
                    <a href="mailto:abelperkasa1@gmail.com" className="contact-ch">
                      <div className="contact-ch-icon">@</div>
                      <div className="contact-ch-text"><div className="ch-label">Email</div><div className="ch-value">abelperkasa1@gmail.com</div></div>
                    </a>
                    <a href="https://wa.me/6285337489141" className="contact-ch" target="_blank" rel="noopener noreferrer">
                      <div className="contact-ch-icon">&gt;</div>
                      <div className="contact-ch-text"><div className="ch-label">WhatsApp</div><div className="ch-value">+62 853 3748 9141</div></div>
                    </a>
                    <a href="https://linkedin.com/in/abigail-perkasa" className="contact-ch" target="_blank" rel="noopener noreferrer">
                      <div className="contact-ch-icon">in</div>
                      <div className="contact-ch-text"><div className="ch-label">LinkedIn</div><div className="ch-value">linkedin.com/in/abigail-perkasa</div></div>
                    </a>
                    <div className="contact-ch">
                      <div className="contact-ch-icon">#</div>
                      <div className="contact-ch-text"><div className="ch-label">Lokasi</div><div className="ch-value">Sumbawa, Indonesia (WITA)</div></div>
                    </div>
                  </div>
                  <div className="contact-note">Balasan biasanya dalam 24 jam. Selalu terbuka untuk diskusi peluang baru maupun kolaborasi.</div>
                </div>
                <form className="contact-form" onSubmit={e=>{e.preventDefault();alert("Pesan terkirim! Terima kasih, saya akan segera menghubungi Anda.");(e.target as HTMLFormElement).reset();}}>
                  <div className="form-row">
                    <div className="form-group"><label htmlFor="name">Nama</label><input type="text" id="name" placeholder="nama lengkap" required name="name"/></div>
                    <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" placeholder="email@domain.com" required name="email"/></div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Topik</label>
                    <select id="subject" name="subject" required defaultValue="">
                      <option value="" disabled>pilih topik...</option>
                      <option value="it-support">IT Support</option>
                      <option value="web-dev">Web Development</option>
                      <option value="data">Data Management</option>
                      <option value="admin">Administrasi</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div className="form-group"><label htmlFor="message">Pesan</label><textarea id="message" name="message" placeholder="ceritakan kebutuhan atau proyek Anda..." required/></div>
                  <button type="submit" className="btn btn-primary btn-send">Kirim Pesan</button>
                  <p className="form-note">* Tidak ada spam. Pesan Anda aman.</p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">Abigail<em>.</em></div>
            <div className="footer-copy">© {new Date().getFullYear()} Abigail Perkasa. All rights reserved.</div>
            <div className="footer-links">
              <a href="https://linkedin.com/in/abigail-perkasa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:abelperkasa1@gmail.com">Email</a>
              <a href="https://wa.me/6285337489141" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
