# Daily job-search run

Inputs: `profile/cv_master.txt`, `config.yml`, `tracker/applications.csv`.

1. **Search** (last 3 days, remote, >= $20/hr) via JobsPipe `search_jobs` (filters: remote, posted_at_max_age_days=3,
   min_salary_usd=41600, titles from config), plus ZipRecruiter / Jobs & Careers / Firecrawl `jobs_search` for extra coverage.
   Always read the full posting (`fetch`) before judging fit - descriptions are truncated in lists.
2. **Dedupe** against `tracker/applications.csv` (job_id/url/company+title).
3. **Filter** with `hard_skip` rules in config.yml (residency/citizenship, seniority, ghost jobs, pay-to-apply).
   Candidate is in Ghana: if a posting says it needs residency/right-to-work in a region, skip it.
4. **Score fit 0-100** against the CV (skills match, seniority, pay). Be honest; don't inflate.
5. **Tailor** for each job >= threshold: write `applications/<date>/<company>/cv.md` + `cover_letter.md`.
   Rules: reorder/rephrase and emphasize real CV content only. NEVER invent employers, degrees, years of
   experience, skills, or metrics. Mirror the posting's keywords only where the CV genuinely supports them.
6. **Submit** (auto_submit=true): where the posting gives an application email, send via Gmail with the tailored CV
   and letter. For portal/LinkedIn/Indeed forms that can't be driven from here, mark `ready_to_apply` with the link and
   materials. Never create accounts, pay fees, or answer screening questions with made-up facts.
7. **Log** every job to `tracker/applications.csv`; commit and push to the dev branch.
8. **Digest**: summarize new matches, submissions, and items needing the candidate's manual click.
