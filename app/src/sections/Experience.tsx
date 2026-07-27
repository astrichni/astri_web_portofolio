import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-cream border-y-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-[3px] border-black mb-6 shadow-brutal-sm">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Background & Credentials</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            EDUCATION & <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">CERTIFICATIONS</span>
          </h2>
          <p className="text-black/80 max-w-2xl text-lg font-medium">
            Academic rigor combined with continuous technical learning in data science and analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Column 1: Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black uppercase tracking-tight flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-pink" />
              Academic Degree
            </h3>

            <div className="brutal-card p-6 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 bg-pink border-[2px] border-black text-xs font-bold uppercase">
                  Fresh Graduate
                </span>
                <span className="text-xs font-bold uppercase text-black/60">Bachelor's Degree</span>
              </div>

              <h4 className="text-xl font-bold text-black uppercase tracking-tight">
                Bachelor of Engineering (S.T.) in Industrial Engineering
              </h4>
              <p className="text-sm font-bold text-pink-700 mt-1">
                Department of Industrial Engineering • Fresh Graduate
              </p>

              <div className="mt-4 pt-4 border-t-[2px] border-black/10 space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-black/70 mb-2">Relevant Courses & Focus Areas:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Natural Language Processing (NLP)',
                      'Machine Learning & IndoBERT',
                      'BERTopic & Text Mining',
                      'Supply Chain Analytics',
                      'Database Systems & SQL',
                      'Statistical Data Analysis',
                      'Operations Research & Optimization'
                    ].map((course) => (
                      <span key={course} className="px-2.5 py-1 bg-cream border-[2px] border-black text-xs font-bold">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase text-black/70 mb-1">Undergraduate Thesis:</div>
                  <p className="text-xs font-semibold text-black/90 leading-relaxed bg-warm-bg p-3.5 border-[2px] border-black shadow-brutal-sm">
                    "Sentiment Analysis of E-Wallet App User Satisfaction in Indonesia Using IndoBERT and Topic Modeling Based on Google Play Store Reviews"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Certifications & Training */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black uppercase tracking-tight flex items-center gap-2">
              <Award className="w-6 h-6 text-mint" />
              Certifications & Credentials
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: 'Data Scientist Supervisor - Nasional',
                  issuer: 'Digital Talent Academy • KOMDIGI RI (2026)',
                  topics: 'Data Screening, Model Strategy Design, Model Implementation & Evaluation (20 Hours)',
                  color: 'bg-pink',
                  file: '/cert/Sertifikat_ASTRI CAHYANI_Data Scientist Supervisor - Nasional.pdf'
                },
                {
                  title: 'Bangkit Academy 2024 Cloud Computing',
                  issuer: 'Google, GoTo, Traveloka • Distinction Graduate',
                  topics: 'Google Cloud Engineer Path, Applied ML for Cloud Engineers, RESTful APIs, Node.js',
                  color: 'bg-mint',
                  file: '/cert/[Bangkit 2024 Batch 1] Certificate - C296D4KX0394.pdf'
                },
                {
                  title: 'Data Engineer in Python',
                  issuer: 'DataCamp (Sep 2025)',
                  topics: 'Python Data Pipelines, Data Wrangling, ETL Automation & Engineering (42 Hours)',
                  color: 'bg-sky',
                  file: '/cert/depython_astri cahyani.pdf'
                },
                {
                  title: 'Associate Data Engineer in SQL',
                  issuer: 'DataCamp (Apr 2025)',
                  topics: 'Relational Database Management, Complex SQL Queries, Data Warehousing (28 Hours)',
                  color: 'bg-amber-300',
                  file: '/cert/data-engineer-sql.pdf'
                },
                {
                  title: 'SQL Fundamentals',
                  issuer: 'DataCamp (Jul 2025)',
                  topics: 'SQL Query Optimization, Aggregations, Window Functions & Joins (26 Hours)',
                  color: 'bg-purple-300',
                  file: '/cert/sql_fundamentals.pdf'
                }
              ].map((cert) => (
                <div key={cert.title} className="brutal-card p-4 bg-white flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 ${cert.color} border-[2px] border-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-brutal-sm`}>
                      <BookOpen className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-black uppercase tracking-tight">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-bold text-black/70 uppercase mt-0.5">
                        {cert.issuer}
                      </div>
                      <p className="text-xs text-black/80 font-medium mt-1 leading-relaxed">
                        {cert.topics}
                      </p>
                    </div>
                  </div>

                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white hover:bg-cream border-[2px] border-black text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-brutal-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] flex-shrink-0 mt-1"
                    >
                      PDF Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
