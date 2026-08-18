# Portfolio Repositioning: Full-Stack/DevOps → Backend + Cloud/DevOps Engineer

Site: https://kiwoly.tlms.live/
Goal: reposition the portfolio to read as **"Backend Developer & Cloud/DevOps Engineer | Django, AWS, Docker, Kubernetes, Terraform, CI/CD"** instead of "DevOps Engineer & Full-Stack Developer." Find each section below in the codebase (likely a Hero, About, Skills/Technologies, Services, Projects, and Experience component) and apply the exact replacement text. Preserve existing styling/animations — only change text content, tag lists, and ordering as specified.

---

## 1. Page metadata

**Find:** meta description / `<title>` containing "DevOps Engineer and Full-Stack Developer"

**Replace with:**
```
Backend Developer & Cloud/DevOps Engineer
```

---

## 2. Hero section

**Find (small label/eyebrow text):**
```
DevOps cloud infrastructure background
Software engineer working with DevOps.
```
**Replace with:**
```
Backend & Cloud/DevOps background
Backend developer working with cloud infrastructure.
```

**Find (name/role line):**
```
Innocent Kiwoly
DevOps Engineer & Full-Stack Developer
```
**Replace with:**
```
Innocent Kiwoly
Backend Developer & Cloud/DevOps Engineer
```

**Find (headline):**
```
Building applications
and scalable
DevOps solutions
```
**Replace with:**
```
Building reliable backend
systems and scalable
cloud infrastructure
```

**Find (intro paragraph):**
```
Hi, I'm Kiwoly, a software engineer working with DevOps. I build applications and focus on deploying, automating, and managing them efficiently
```
**Replace with:**
```
Hi, I'm Kiwoly, a backend developer and cloud/DevOps engineer. I build robust APIs with Django and deploy, automate, and scale them using Docker, Kubernetes, Terraform, and AWS.
```

Leave "Contact Me", "Download CV", "Available for work", "3+ Years Exp" unchanged.

---

## 3. Technologies list

**Find the current tag list/array (in this order):**
```
Html, Css, Js, React, Tailwind, Python, Django, DRF, Graphql, Postgress, Git, Github, Docker, CI/CD, Iaac, Dart, Flutter
```

**Replace with this order (backend/cloud first, add missing AWS and Kubernetes, rename Iaac → Terraform):**
```
Python, Django, DRF, PostgreSQL, Docker, Kubernetes, Terraform, AWS, CI/CD, Git, GitHub, GraphQL, Html, Css, Js, React, Tailwind, Dart, Flutter
```

Note: if this list is rendered twice for a marquee/scroll effect, apply the same change to both copies.

---

## 4. About Me section

**Find the three body paragraphs currently in this order:**

Paragraph A (backend — keep, move to position 1):
```
I am a Software and DevOps Engineer focused on building scalable web and mobile applications. I specialize in backend development using Django, where I design reliable APIs and systems that are efficient and easy to maintain. I enjoy solving real-world problems by delivering simple and effective solutions.
```

Paragraph B (full-stack/mobile — move to position 3, shorten):
```
I build complete applications using React and Flutter, working across the full stack from frontend to backend. I turn ideas into production-ready systems that are functional, user-friendly, and scalable.
```

Paragraph C (DevOps — move to position 2):
```
I also implement DevOps practices to deploy and manage applications in production. I work with Docker for containerization, Kubernetes for managing applications at scale, and CI/CD pipelines to automate deployment. My focus is on building systems that are reliable, scalable, and ready for real-world use.
```

**Replace the section with these three paragraphs, in this exact order:**
```
I am a Backend Developer and Cloud/DevOps Engineer focused on building scalable, production-ready systems. I specialize in backend development using Django, where I design reliable APIs and data-driven systems that are efficient and easy to maintain.

I implement DevOps and cloud practices to deploy and manage applications in production — using Docker for containerization, Kubernetes for orchestration, Terraform for infrastructure as code, AWS for cloud infrastructure, and CI/CD pipelines to automate deployment. My focus is on building systems that are reliable, scalable, and ready for real-world use.

I also build across the stack when needed, using React and Flutter to deliver complete, user-friendly applications from frontend to backend.
```

**Find the pull-quote:**
```
"My mission is to design and develop innovative digital solutions that bridge the gap between technology and real-world challenges. I am driven to master full-stack development and DevOps, building systems that are not only functional but scalable, efficient, and future-ready."
```
**Replace with:**
```
"My mission is to design and develop innovative digital solutions that bridge the gap between technology and real-world challenges. I am driven to master backend systems and cloud/DevOps engineering, building systems that are not only functional but scalable, efficient, and future-ready."
```

---

## 5. Service cards

**Find the four cards, currently in this order: Software Engineering, Mobile Development, Backend Development, DevOps & Cloud.**

**Reorder the cards (text unchanged) to:**
1. Backend Development
2. DevOps & Cloud
3. Software Engineering
4. Mobile Development

If these cards are defined as an array/list in the code, just reorder the array items — do not change their copy.

---

## 6. Featured Work — project tags

**Find the "Air Quality Monitoring" project card, currently tagged:**
```
React, Django, Postgress, IOT, Lorawan, Influx DB
```
**Replace tags with:**
```
Django, PostgreSQL, Docker, CI/CD, Oracle Cloud, IOT, Lorawan, InfluxDB
```
Leave the title and description text ("Monitoring Air quality by measuring air polluntant gas") unchanged.

**Optional — add a 4th project card** (only if a Stays/property-platform project isn't already elsewhere in the codebase):
```
Name: Stays
Description: Property discovery platform for finding hotels, lodges, and Airbnb-style stays in Tanzania.
Tags: Django, PostgreSQL, Docker, CI/CD, Flutter
```
Leave the e-commerce and e-learning cards unchanged.

---

## 7. Experience section

Do **not** change any job titles or dates — they're factual. Only reword the description line under each entry if it currently undersells backend/infra work actually done. Leave as-is unless you have specifics to add; do not invent details.

---

## Summary of what changed
- Meta title/description: full-stack+DevOps → Backend + Cloud/DevOps
- Hero: role, headline, intro rewritten around backend/cloud
- Tech stack: reordered backend-first, added missing AWS + Kubernetes, renamed Iaac → Terraform
- About: paragraph order swapped (DevOps before full-stack/mobile), quote reworded
- Service cards: Backend Development and DevOps & Cloud moved to top
- Project tags: Air Quality Monitoring card now shows its real infra stack
- Experience: titles/dates untouched, no changes unless factually justified
