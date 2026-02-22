import { ExternalLink, Play } from "lucide-react";


const projects = [
  {
    title: "Elragol El3nab",
    description: "Order food easily from your favorite restaurants with fast delivery service",
    tags: ["Food Delivery", "Firebase", "Maps"],
    image: "https://play-lh.googleusercontent.com/uzcrKx4Ig9y_VD4_HP5cU51yy0PeKcgFSH-ROnzP49WGsd_bcdDjeZFwx0eXlFz8hPB6Q-SVt8Ue3xbBiRkAjw=s256",
    link: "https://play.google.com/store/apps/details?id=com.elragolel3nab.delivery",
    gradient: "from-red-500/10 to-orange-500/5",
  },
  {
    title: "Elragol Manager",
    description: "Comprehensive restaurant management app with menus, orders, and sales tracking",
    tags: ["Business", "Management", "Restaurant"],
    image: "https://play-lh.googleusercontent.com/3p6xkYKxOxwIO-8qzUJC8fSUD11Vo8JvWAEwqa12YnwPv7pt3cwSM-smNAPPgyFIVB_nCuCDyJIhEeFGMFtR1w=s256",
    link: "https://play.google.com/store/apps/details?id=com.elragol.restaurant.manager",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
  {
    title: "Tajweed Quiz",
    description: "Test your knowledge on Tajweed rules with certificate rewards",
    tags: ["Education", "Islamic", "Quiz"],
    image: "https://play-lh.googleusercontent.com/Y5jM7IJk-rQ82BMmG8LlcQZQ80cwUFo9YoIqNb_SWsrisNBRXXDnU5hUWogbsVRfnV_N=s256",
    link: "https://play.google.com/store/apps/details?id=com.coding.quiz_app",
    gradient: "from-indigo-500/10 to-purple-500/5",
  },
  {
    title: "Photo Studio",
    description: "Edit photos and remove backgrounds easily with professional tools",
    tags: ["Image Editing", "Graphics", "Tools"],
    image: "https://play-lh.googleusercontent.com/Tv_fcXjSftY3wi4T0zBV00IiGppY0-FTD2yLLEmd3WpTNgbZYL3eot77RHEL6m3O_DIuZ-f341nOkg7H0dGOZg=s256",
    link: "https://play.google.com/store/apps/details?id=com.kh.remove.bg",
    gradient: "from-pink-500/10 to-rose-500/5",
  },
  {
    title: "Samannud Toktok",
    description: "Safe and reliable transportation app for Samannud city residents",
    tags: ["Transportation", "Location", "Flutter"],
    image: "https://play-lh.googleusercontent.com/KAMBpV1-r7B7lrd-FD8vMlrpoMj80fbSE1xiuVKRNX7uvsTRiy3CMuL08eMRapfJfoyV=s256",
    link: "https://play.google.com/store/apps/details?id=com.transport.samannud_toktok",
    gradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    title: "Anisuk Mushafuk",
    description: "Listen to the Holy Quran with elite reciters anytime, anywhere",
    tags: ["Islamic", "Quran", "Audio"],
    image: "https://play-lh.googleusercontent.com/4RRXlA8lYSCZoobI1DUNm_5dejjMtyJ_oPZ8mhUXnvpplKNN8LM_PUTste82gSk2MqDI4nFeM2Xrq2pSzvC5=s256",
    link: "https://play.google.com/store/apps/details?id=com.kh.full_quran",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Alafasy Quran",
    description: "Quranic recitations and anthems by Sheikh Mishary Al-Afasy",
    tags: ["Quran", "Islamic", "Audio"],
    image: "https://play-lh.googleusercontent.com/FzV2AtISbpE86CoORkZ9yRX6dkr5MbEEVbzKCWOjEdxoRYOrvcvj4SALfzfyLTR6N5KQXTy5Rhd8PH1gy1Wh=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.islamic_alafasy",
    gradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index easily and quickly",
    tags: ["Health", "Fitness", "Utility"],
    image: "https://play-lh.googleusercontent.com/T2FqICsAxLTPZbkCBwjEkk54MKMPLry-QoZ5FPSzJKTHGvffW9yUX3kIvyGi-5AUFUyiM2o-jvTDs-QJSWucWg=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.bmi.calc",
    gradient: "from-green-500/10 to-lime-500/5",
  },
  {
    title: "Quran for Kids",
    description: "Listen to Quran recitation with children's chorus accompaniment",
    tags: ["Quran", "Islamic", "Kids"],
    image: "https://play-lh.googleusercontent.com/H3I0M2cHohkCPJjwFBY5Ygq1Qu9xfU5d5D9okcwWKuvy_CRxVl8dKHEHiKT0d1uEyQ=s256",
    link: "https://play.google.com/store/apps/details?id=com.quran_2.quran_sound_2",
    gradient: "from-sky-500/10 to-blue-500/5",
  },
  {
    title: "Qatrah Hayat",
    description: "Find blood donors or register as a donor to save lives",
    tags: ["Healthcare", "Donation", "Social"],
    image: "https://play-lh.googleusercontent.com/0EOuhMYU3vSVLWCsoGkQy0xBvT7aeZIun0YC50V_wM-rwgRncB0MkeI8fzbYgG94qMU=s256",
    link: "https://play.google.com/store/apps/details?id=com.khair.qatrahayat",
    gradient: "from-rose-500/10 to-red-500/5",
  },
  {
    title: "Yalla Shoghl",
    description: "Connect with service providers for home maintenance and repairs",
    tags: ["Services", "Marketplace", "Flutter"],
    image: "https://play-lh.googleusercontent.com/NW-FDzaJAU1gFe_Dmt_1u_iEtVavk0Mz6hN6XsyyuuMc5rYEWQgXxdc8AXZGpsf5YiGomciM9T_oG4y_JJLqjLU=s256",
    link: "https://play.google.com/store/apps/details?id=com.yallashoghl.app",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    title: "Anime World",
    description: "Watch dubbed and translated anime and cartoons in one app",
    tags: ["Entertainment", "Anime", "Videos"],
    image: "https://play-lh.googleusercontent.com/jESzNlstAkjMKdabjjvktxFF5cEzMuQego0YCvRHQ22CULyUA51sXbmM7YF_ln4Lavs=s256",
    link: "https://play.google.com/store/apps/details?id=com.anime.mpc3_anime_free",
    gradient: "from-fuchsia-500/10 to-pink-500/5",
  },
  {
    title: "Video World",
    description: "Stream diverse videos from various online sources easily",
    tags: ["Entertainment", "Videos", "Streaming"],
    image: "https://play-lh.googleusercontent.com/BQ76Qb-A4eP4aAaxxfKxmpllQc7MYYNA-_mqMrcKz1QYbk7rRSiNrdXWoYVqKRlf5SPXKjNB9sQAC74jtSRWkkU=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.video.world",
    gradient: "from-yellow-500/10 to-orange-500/5",
  },
  {
    title: "Counter Plus",
    description: "Simple counter app to track anything easily",
    tags: ["Utility", "Counter", "Tracking"],
    image: "https://play-lh.googleusercontent.com/i-GiA-wAeotMfz8OBf_LLk8BTmRcpSxeMDtp5SyetVfI3zxQbvO_-Oa47qeoOi85JzY9KD0vvy4ZrYkmFd3z2w=s256",
    link: "https://play.google.com/store/apps/details?id=dev.elsayed.ektshaf",
    gradient: "from-cyan-500/10 to-blue-500/5",
  },
  {
    title: "Tales & Stories",
    description: "Watch entertaining tales and stories in a simple and fun style",
    tags: ["Entertainment", "Stories", "Kids"],
    image: "https://play-lh.googleusercontent.com/J0JSqLRAsQDPig9c_oZEjGk0bPEWkVLZAiS8WBnUGth9HF-zqNsx3ajvAtkDJn3LcsxLVkxmTN3KFKvvRm8ulg=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.tales_and_stories",
    gradient: "from-purple-500/10 to-indigo-500/5",
  },
  {
    title: "Football World",
    description: "Follow football news and match highlights easily",
    tags: ["Sports", "Football", "News"],
    image: "https://play-lh.googleusercontent.com/3F9wmp2i2TQRhGZPMGo3DPy9h8s8TiQDXSRUiIV3LmrEIqoB-LwMNOK3KWbAk3qcC6su5l50bFL6W86VN9LFfg=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.football_app",
    gradient: "from-red-500/10 to-orange-500/5",
  },
  {
    title: "Gaming Adventures",
    description: "Watch gaming videos and player adventures in various games",
    tags: ["Gaming", "Videos", "Entertainment"],
    image: "https://play-lh.googleusercontent.com/5QdCtrujqb21qbKpYcUHCecmSV3-UuH0DM8TFyPRAkeW47bfuToT_4CjzmVHcyH8H0jBi0mOafuszHS5uziXJQ=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.games_adventures",
    gradient: "from-indigo-500/10 to-blue-500/5",
  },
  {
    title: "Egypt Theater Shows",
    description: "Enjoy theatrical and comedy shows from Egypt's top comedians",
    tags: ["Comedy", "Entertainment", "Theater"],
    image: "https://play-lh.googleusercontent.com/3shbVRCnkxAb1MSJw-CZL4Kq-SdiUKrs_X3zYpHLXpMljEAeivByjGhUVtcGD18qak8rfyibqAKWGGPRLeO_AcE=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.youtube_videos",
    gradient: "from-yellow-500/10 to-amber-500/5",
  },
  {
    title: "Movies & Series World",
    description: "Your comprehensive gateway to all new cinema and drama content",
    tags: ["Movies", "Series", "Entertainment"],
    image: "https://play-lh.googleusercontent.com/9EOFTAhcvn459L1qiHSfqGicNXQNRv9DFhe9sqmWoQ068jXI7nyDOIvmAoTaSIyYnIMFCIrkmwpCW8g2cQqbjHc=s256",
    link: "https://play.google.com/store/apps/details?id=com.code.world_movies_series",
    gradient: "from-rose-500/10 to-pink-500/5",
  },
  {
    title: "Quran Stories",
    description: "Learn about prophets and Quranic stories in a simplified way",
    tags: ["Islamic", "Educational", "Stories"],
    image: "https://play-lh.googleusercontent.com/nzgMCshLJafwz88FlQrwQ3qLxoAnQ3QNZtvmvStBXRJ5QXEssztEurh_3ntcRnj1lVC8D5W6eRRXGvo_eLEy7SI=s256",
    link: "https://play.google.com/store/apps/details?id=com.kg.qasas_quran",
    gradient: "from-teal-500/10 to-green-500/5",
  },
  {
    title: "Hadaya.AI",
    description: "Hadaya.AI is a smart social commerce application that helps you shop smartly and share favorite products with your friends through interactive circuits and boards.",
    tags: ["Social", "Commerce", "AI"],
    image: "https://play-lh.googleusercontent.com/fb4MQAPAws69aHDk_T7jVbGkne7dqz3QgvonJcgK3IyEykw72H2oT8WWXPQiAdX8_uuYIZek4FCB75NtgGFi=w240-h480",
    link: "https://play.google.com/store/apps/details?id=ai.hadaya",
    gradient: "from-teal-500/10 to-green-500/5",
  },
];

function ProjectCard({ project }) {
  // هذا الرابط البديل (أيقونة تطبيق افتراضية)
  const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowwNtgVEgHIaIUeV7kmDBMRHwZh2siWgb0A&s";

  const handleImageError = (e) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div
      className={`glass-card p-0 overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${project.gradient}`}
    >
      <div className="p-7">
        {/* Image Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors"></div>
            <img
              src={project.image}
              alt={project.title}
              onError={handleImageError} // هنا السحر: لو الصورة باظت هيحط البديل
              className="w-16 h-16 rounded-2xl relative z-10 shadow-lg object-cover border border-white/10 group-hover:scale-105 transition-transform duration-500 bg-background"
            />
          </div>
          <div className="flex items-center gap-1.5 text-primary text-[10px] font-black tracking-[0.2em] bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIVE
          </div>
        </div>

        <h3 className="font-display font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2.5 py-1 rounded-md bg-background/50 border border-border/50 text-muted-foreground uppercase font-bold tracking-tighter"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-3 px-4 w-full justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-all flex items-center gap-3 font-bold"
        >
          <Play size={14} fill="currentColor" />
          VIEW ON GOOGLE PLAY
          <ExternalLink size={15} className="ml-auto text-white opacity-100" />
        </a>
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="accent-line mx-auto" />
          <h2 className="section-heading mt-4">Production Applications</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Real apps I have developed and successfully published on Google Play Store.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://play.google.com/store/apps/dev?id=8234838259619919952"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/20 hover:border-primary text-primary font-bold tracking-widest text-xs transition-all hover:bg-primary/5"
          >
            EXPLORE FULL DEVELOPER PORTFOLIO
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}