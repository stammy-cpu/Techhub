import Image from "next/image";

type LibraryItem = {
  title: string;
  meta: string;
  link: string;
  img?: string;
  alt?: string;
  icon?: string; // fallback icon if no img
};

export default function Page() {
  const libraryItems: LibraryItem[] = [
    {
      title: "Dermocosmetics: Clinical Essentials",
      meta: "Book · 2nd Edition",
      link: "#",
      img: "/library/bitten-600x400.jpg",
      alt: "Dermocosmetics book cover",
    },
    {
      title: "Integrative Acne Management",
      meta: "Clinical Brief",
      link: "#",
      img: "/library/hourglass-600x400.jpg",
      alt: "Integrative Acne Management brief",
    },
    {
  title: "Aesthetics & Outcomes Quarterly",
  meta: "Periodical",
  link: "#",
  img: "/library/ao-quarterly-v2-600x400.jpg",
  alt: "Analytics card with charts in green palette",
},
{
  title: "Ethics of Beauty in Medicine",
  meta: "Essay",
  link: "#",
  img: "/library/ethics-beauty-v2-600x400.jpg",
  alt: "Balance scale, laurel, and book motif in green palette",
},

  ];

  return (
    <main>
      {/* Topbar */}
      <div className="w-full border-b border-line bg-soft py-2 text-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <i className="bi bi-envelope" /> hello@ediphi.org
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <i className="bi bi-telephone" /> +1 (555) 010-2030
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 opacity-80">
            <a href="#" aria-label="Twitter" className="hover:text-accent">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-[#28502E] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-sm bg-white/90" />
            <span className="font-display text-lg tracking-wide">e.d.i.PHI</span>
          </a>

          {/* Center nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-white/90 hover:text-white" href="#podcasts">
              Podcast
            </a>

            {/* Publications */}
            <div className="relative group">
              <a
                href="#publications"
                className="flex items-center gap-1 text-sm text-white/90 hover:text-white"
              >
                Publications
                <svg className="h-3 w-3 opacity-90" viewBox="57 35.171 26 16.043" aria-hidden="true">
                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" fill="currentColor" />
                </svg>
              </a>
              <div className="absolute left-0 top-full hidden min-w-56 rounded-lg border border-white/20 bg-white p-2 text-ink shadow-lg group-hover:block">
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#briefs">
                  Briefs Library
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#essays">
                  Essays
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#periodicals">
                  Periodicals
                </a>

                {/* Harm Cases flyout */}
                <div className="relative group/sub">
                  <a
                    href="#harms"
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-soft"
                  >
                    Harm Cases
                    <svg className="h-3 w-3 opacity-80" viewBox="57 35.171 26 16.043" aria-hidden="true">
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" fill="currentColor" />
                    </svg>
                  </a>
                  <div className="absolute top-0 left-full z-10 hidden min-w-56 translate-x-2 rounded-lg border border-black/10 bg-white p-2 shadow-lg group-hover/sub:block">
                    <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#harm-in-the-news">
                      In the News
                    </a>
                  </div>
                </div>

                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#books">
                  Books
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#repository">
                  Repository
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <a
                href="#services"
                className="flex items-center gap-1 text-sm text-white/90 hover:text-white"
              >
                Services
                <svg className="h-3 w-3 opacity-90" viewBox="57 35.171 26 16.043" aria-hidden="true">
                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" fill="currentColor" />
                </svg>
              </a>
              <div className="absolute left-0 top-full hidden min-w-56 rounded-lg border border-white/20 bg-white p-2 text-ink shadow-lg group-hover:block">
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#patient">
                  Patient Page
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#clinician">
                  Clinical Page
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#harm-webinars">
                  Harm Webinars
                </a>
                <a className="block rounded-md px-3 py-2 text-sm hover:bg-soft" href="#catalog">
                  Catalog
                </a>
              </div>
            </div>

            <a className="text-sm text-white/90 hover:text-white" href="#shop">
              Shop
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white/90 backdrop-blur-sm transition hover:bg-white/20 hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="-888 480 142 142" aria-hidden="true">
                <path
                  d="M-787.4,568.7h-6.3l-2.4-2.4c7.9-8.7,12.6-20.5,12.6-33.1c0-28.4-22.9-51.3-51.3-51.3
               c-28.4,0-51.3,22.9-51.3,51.3c0,28.4,22.9,51.3,51.3,51.3c12.6,0,24.4-4.7,33.1-12.6l2.4,2.4v6.3l39.4,39.4l11.8-11.8L-787.4,568.7z
               M-834.7,568.7c-19.7,0-35.5-15.8-35.5-35.5c0-19.7,15.8-35.5,35.5-35.5c19.7,0,35.5,15.8,35.5,35.5
               C-799.3,553-815,568.7-834.7,568.7z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <a
              href="#signin"
              className="hidden rounded-md border border-white/25 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:text-white md:inline-flex"
            >
              Members Sign In
            </a>

            <a
              href="#cart"
              aria-label="Cart"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="826 826 140 140" aria-hidden="true">
                <path
                  d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424
               c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77
               l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807
               s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627
               c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627
               h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254
               c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385
               v-19.254c0-7.973,2.821-14.779,8.461-20.42c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461
               C922.062,842.712,924.881,849.519,924.881,857.492z"
                  fill="currentColor"
                />
              </svg>
              <span className="pointer-events-none absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-black text-[10px] leading-none">
                0
              </span>
            </a>

            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 text-white/90">
              <i className="bi bi-list" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-soft to-[#E6EFE7]" />
        <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#95A99B]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-[#243426]/20 blur-3xl" />

        <div className="container mx-auto grid gap-8 px-4 pt-10 pb-4 md:grid-cols-2 md:items-center md:pt-14 md:pb-6">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#9CB2A1]/60 bg-white/70 px-3 py-1 text-xs font-medium text-brand">
              Beauty & Health in Medicine
            </span>
            <h1 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Knowledge. Care. <span className="text-accent">Community.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              A trusted hub for clinicians and patients—curated library, accredited webinars, in-depth essays,
              and a growing catalog of publications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#library" className="btn btn-brand">
                Explore Library
              </a>
              <a href="#learning" className="btn btn-ghost">
                Join Webinar
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
              <span className="pill">
                <i className="bi bi-journal-medical" /> 120+ Publications
              </span>
              <span className="pill">
                <i className="bi bi-people" /> 5k+ Learners
              </span>
              <span className="pill">
                <i className="bi bi-mic" /> Weekly Podcasts
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="grid place-items-center">
            <Image
              src="/hero-woman.png"
              alt="Professional woman"
              width={1536}
              height={1024}
              className="w-full max-w-3xl rounded-2xl border border-line object-cover shadow-sm"
              priority
              sizes="(min-width: 1024px) 48rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Quick Links — closer to hero */}
      <section className="-mt-2 md:-mt-4 pt-2 md:pt-3 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: "bi-journals",
                cornerIcon: "bi-book",
                title: "Library",
                desc: "Books, Essays, Periodicals & Briefs.",
                href: "#library",
              },
              {
                icon: "bi-camera-video",
                cornerIcon: "bi-play-btn",
                title: "Webinars",
                desc: "Live & on-demand sessions.",
                href: "#learning",
              },
              {
                icon: "bi-broadcast-pin",
                cornerIcon: "bi-mic",
                title: "Podcasts",
                desc: "Conversations in care.",
                href: "#podcasts",
              },
              {
                icon: "bi-bag",
                cornerIcon: "bi-bag",
                title: "Catalog",
                desc: "Publications & memberships.",
                href: "#catalog",
              },
            ].map((it) => (
              <a
                key={it.title}
                href={it.href}
                className="group relative overflow-hidden rounded-2xl bg-[#28502E] p-5 text-white shadow-md transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[190px] md:min-h-[220px]"
              >
                <i
                  className={`bi ${it.cornerIcon} absolute right-3 top-3 text-base text-white/70 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                  aria-hidden="true"
                />
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-2 pr-8">
                    <i className={`bi ${it.icon} text-2xl text-white`} />
                    <h3 className="font-display text-base leading-tight">{it.title}</h3>
                    <p className="text-xs text-white/90">{it.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-sm text-white/75 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-soft py-10 md:py-12 -mt-2">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <div className="mb-3">
              <h2 className="font-display text-2xl">About e.d.i.PHI</h2>
              <p className="text-muted">Elevating outcomes through evidence-based education.</p>
            </div>
            <p className="text-muted">
              We bring clinicians, researchers, and patients together around trustworthy content and continuing education.
              From concise clinical briefs to long-form essays and periodicals, our library grows with peer-reviewed rigor
              and real-world relevance.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
              <li>
                Curated <b>Library</b> across beauty & medical topics
              </li>
              <li>
                Accredited <b>Webinars</b> and hands-on workshops
              </li>
              <li>
                Dedicated <b>Clinician</b> and <b>Patient</b> pathways
              </li>
            </ul>
            <a href="#contact" className="btn btn-brand mt-5">
              <i className="bi bi-envelope me-2" /> Get in touch
            </a>
          </div>

          {/* About image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-line bg-white/60 shadow-sm">
            <Image
              src="/about-students-640x360.png"
              alt="Two students in a library"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Library Highlights */}
      <section id="library" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="font-display text-2xl">From the Library</h2>
            <p className="text-muted">Books • Essays • Periodicals • Briefs</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {libraryItems.map((p) => (
              <article key={p.title} className="pub">
                {/* Cover area: image if provided; otherwise icon fallback */}
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-soft lg:h-[200px]">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.alt ?? p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 300px, 50vw"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center">
                      <i className={`bi ${p.icon ?? "bi-book"} text-2xl text-brand`} />
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h6 className="font-display mb-1 text-sm">{p.title}</h6>
                  <p className="mb-2 text-xs text-muted">{p.meta}</p>
                  <a className="text-xs text-brand underline" href={p.link}>
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a className="btn btn-brand" href="#">
              Open full Library
            </a>
          </div>
        </div>
      </section>

      {/* Webinars & Podcasts */}
      <section id="learning" className="bg-soft py-16">
        <div className="container mx-auto grid items-start gap-8 px-4 md:grid-cols-2">
          <div>
            <div className="mb-2">
              <h2 className="font-display text-2xl">Upcoming Webinar</h2>
              <p className="text-muted">Live learning for clinicians & informed patients</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h5 className="font-display">Complications in Aesthetic Medicine: Prevention & Care</h5>
              <p className="mt-1 text-xs text-muted">Thursday • 6:00 PM GMT • CPD credits available</p>
              <p className="mt-3 text-sm">
                Evidence-based strategies for risk reduction and patient communication. Includes case reviews and Q&amp;A.
              </p>
              <div className="mt-3 flex gap-2">
                <a className="btn btn-brand" href="#">
                  Register
                </a>
                <a className="btn btn-ghost" href="#">
                  See all webinars
                </a>
              </div>
            </div>
          </div>

          <div id="podcasts">
            <div className="mb-2">
              <h2 className="font-display text-2xl">Latest Podcast</h2>
              <p className="text-muted">Conversations at the nexus of beauty and health</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h6 className="font-display">Skin Microbiome & Procedural Outcomes</h6>
              <div className="mt-3 h-12 w-full rounded-md border border-line bg-soft" />
              <div className="mt-3 flex gap-2">
                <a className="btn btn-ghost" href="#">
                  All episodes
                </a>
                <a className="btn btn-ghost" href="#">
                  <i className="bi bi-rss me-1" /> Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician & Patient */}
      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
          <div id="clinician" className="rounded-2xl border border-line p-6">
            <span className="mb-2 inline-block rounded-full border border-line bg-soft px-3 py-1 text-xs">
              For Clinicians
            </span>
            <h3 className="font-display text-xl">Clinical Resources</h3>
            <p className="mt-2 text-sm text-muted">
              Protocols, briefs, and workshop materials designed to be practice-ready. Join peer reviews and contribute
              case notes.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              <li>Guidelines & checklists</li>
              <li>Case libraries & discussion boards</li>
              <li>CPD tracking & certificates</li>
            </ul>
            <a className="btn btn-brand mt-4" href="#">
              Enter Clinician Portal
            </a>
          </div>

          <div id="patient" className="rounded-2xl border border-line p-6">
            <span className="mb-2 inline-block rounded-full border border-line bg-soft px-3 py-1 text-xs">
              For Patients
            </span>
            <h3 className="font-display text-xl">Patient Education</h3>
            <p className="mt-2 text-sm text-muted">
              Clear, accessible guides to help you prepare, choose, and care—before and after procedures. Backed by
              clinicians.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              <li>Treatment explainers</li>
              <li>Safety & aftercare checklists</li>
              <li>Webinars & Q&amp;A sessions</li>
            </ul>
            <a className="btn btn-ghost mt-4" href="#">
              Explore Patient Guides
            </a>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-soft py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="font-display text-2xl">Catalog & Memberships</h2>
            <p className="text-muted">Publications, bundles, and access plans</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                badge: "",
                title: "Open Access",
                price: "$0",
                desc: "Free resources and selected articles.",
                b1: "Selected essays & briefs",
                b2: "Podcast access",
                b3: "Community newsletter",
                cta: "Get Started",
              },
              {
                badge: "Popular",
                title: "Professional",
                price: "$29/mo",
                desc: "Best for active clinicians and trainees.",
                b1: "Full library access",
                b2: "Webinar certificates",
                b3: "Conference discounts",
                cta: "Choose Plan",
              },
              {
                badge: "",
                title: "Institution",
                price: "Custom",
                desc: "For clinics, programs, and universities.",
                b1: "Seat-based licensing",
                b2: "LMS integrations",
                b3: "Dedicated support",
                cta: "Talk to Sales",
              },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                {t.badge && (
                  <span className="mb-2 inline-block rounded-full border border-line bg-soft px-2 py-0.5 text-xs">
                    {t.badge}
                  </span>
                )}
                <h5 className="font-display text-lg">{t.title}</h5>
                <p className="text-sm text-muted">{t.desc}</p>
                <div className="my-2 text-2xl">{t.price}</div>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-muted">
                  <li>{t.b1}</li>
                  <li>{t.b2}</li>
                  <li>{t.b3}</li>
                </ul>
                <a className={`btn ${t.title === "Professional" ? "btn-brand" : "btn-ghost"} w-full`} href="#">
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl">FAQ</h2>
            <p className="text-muted">Answers to common questions</p>
          </div>
          <div className="md:col-span-2">
            <details className="faq">
              <summary>Is the library peer-reviewed?</summary>
              <p>
                Yes. Our editorial board oversees peer review for clinical materials and invites external reviewers for
                specialized topics.
              </p>
            </details>
            <details className="faq">
              <summary>Do webinars offer CPD credits?</summary>
              <p>
                Select webinars include CPD/CE accreditation. Each event page lists eligibility and claiming
                instructions.
              </p>
            </details>
            <details className="faq">
              <summary>Can patients access clinician pages?</summary>
              <p>
                Clinician materials require a professional account. Patients have a dedicated path with accessible
                guides and webinars.
              </p>
            </details>
            <details className="faq">
              <summary>How do I integrate with my LMS?</summary>
              <p>Institution plans support integrations (e.g., SCORM/xAPI, Moodle). Contact us for implementation details.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-soft py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="font-display text-2xl">Contact</h2>
            <p className="text-muted">We’d love to hear from you</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h6 className="font-display">Head Office</h6>
              <p className="text-muted">
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
              </p>
              <p className="mt-2">
                <b>Phone:</b> +1 (555) 010-2030
              </p>
              <p className="mt-1">
                <b>Email:</b> hello@ediphi.org
              </p>
            </div>
            <form className="rounded-2xl border border-line bg-white p-6 shadow-sm md:col-span-2">
              <div className="grid gap-3 md:grid-cols-2">
                <label className="field">
                  Name<input type="text" placeholder="Your name" required />
                </label>
                <label className="field">
                  Email<input type="email" placeholder="you@example.com" required />
                </label>
                <label className="field md:col-span-2">
                  Subject<input type="text" placeholder="How can we help?" required />
                </label>
                <label className="field md:col-span-2">
                  Message<textarea rows={6} placeholder="Write your message…" required />
                </label>
              </div>
              <button className="btn btn-brand mt-4" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line py-10">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          <div>
            <h5 className="font-display">e.d.i.PHI</h5>
            <p className="text-muted">Beauty & Health in Medicine</p>
            <p className="text-muted">© {new Date().getFullYear()} e.d.i.PHI. All rights reserved.</p>
          </div>
          <div>
            <h6 className="font-display">Explore</h6>
            <ul className="space-y-1 text-muted">
              <li>
                <a href="#library" className="hover:text-accent">
                  Library
                </a>
              </li>
              <li>
                <a href="#learning" className="hover:text-accent">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#podcasts" className="hover:text-accent">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-accent">
                  Catalog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-display">Company</h6>
            <ul className="space-y-1 text-muted">
              <li>
                <a href="#about" className="hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
