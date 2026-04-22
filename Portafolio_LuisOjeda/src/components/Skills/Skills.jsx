import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import SkillGraph from './SkillGraph'
import styles from './Skills.module.css'

const skillCategories = [
    {
        id: 'frontend',
        label: 'Frontend',
        color: '#00d4ff',
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'SASS', 'Tailwind CSS', 'Bootstrap']
    },
    {
        id: 'backend',
        label: 'Backend',
        color: '#00ff88',
        skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT', 'Prisma', 'Sequelize', 'Mongoose']
    },
    {
        id: 'databases',
        label: 'Databases',
        color: '#bd00ff',
        skills: ['SQL', 'MariaDB', 'PostgreSQL', 'SQLite', 'MongoDB', 'MySQL Workbench', 'DBeaver']
    },
    {
        id: 'tools',
        label: 'Tools',
        color: '#ffb703',
        skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Laragon', 'PSeInt', 'Wireframe Sketcher', 'Gulp']
    },
    {
        id: 'softskills',
        label: 'Soft Skills',
        color: '#ff5f8f',
        skills: ['Scrum', 'Teamwork', 'Leadership', 'Time Management', 'Communication']
    }
]

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="section-tag">
                        <Cpu size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'text-bottom' }} aria-hidden="true" />
                        Technical Arsenal
                    </span>
                    <h2 className="section-title">
                        <span className="gradient-text">Skill Matrix</span>
                    </h2>
                    <p className="section-subtitle">
                        My frontend, backend, database, and workflow toolkit
                    </p>
                </div>

                {/* Desktop: Complex Graph */}
                <SkillGraph />

                {/* Mobile: Simple Grid View */}
                <div className={styles.mobileSkillsGrid}>
                    {skillCategories.map((category) => (
                        <React.Fragment key={category.id}>
                            <motion.div
                                className={styles.mobileCategory}
                                style={{ borderColor: category.color }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3
                                    className={styles.mobileCategoryTitle}
                                    style={{ color: category.color }}
                                >
                                    {category.label}
                                </h3>
                            </motion.div>

                            {category.skills.map((skill, index) => {
                                const isOddCount = category.skills.length % 2 !== 0
                                const isLastItem = index === category.skills.length - 1
                                const shouldCenter = isOddCount && isLastItem

                                return (
                                    <motion.div
                                        key={`${category.id}-${skill}`}
                                        className={styles.mobileSkillBadge}
                                        style={{
                                            borderColor: category.color,
                                            color: category.color,
                                            boxShadow: `0 0 10px ${category.color}20`,
                                            ...(shouldCenter ? {
                                                gridColumn: 'span 2',
                                                width: '50%',
                                                margin: '0 auto'
                                            } : {})
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {skill}
                                    </motion.div>
                                )
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, transparent 0%, #000 80%)',
                pointerEvents: 'none',
                zIndex: 1
            }} />
        </section>
    )
}

export default Skills

