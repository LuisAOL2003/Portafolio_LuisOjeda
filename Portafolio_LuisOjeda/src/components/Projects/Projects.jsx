import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from './Projects.module.css'

// SVG Icons
const Github = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

const Star = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const GitFork = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 12v3" />
    </svg>
)

const Folder = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
)

const ArrowRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)

// GitHub user
const GITHUB_USERNAME = 'LuisAOL2003'

// Language colors
const getLanguageColor = (language) => {
    const colors = {
        'Python': '#3572A5',
        'QML': '#44a51c',
        'Shell': '#89e051',
        'HTML': '#e34c26',
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'C++': '#f34b7d',
        'C': '#555555',
        'Solidity': '#AA6746',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Java': '#b07219',
        'PHP': '#4F5D95',
        'Vue': '#41B883',
    }
    return colors[language] || '#8892a0'
}

// Your projects
const projects = [
    {
        id: 1,
        name: 'DevTree',
        customDescription:
            'Professional developer profile platform built with TypeScript. Focused on personal branding, portfolio links, contact visibility, and modern responsive UI.',
        images: [
            '/images/devtree_1.png',
            '/images/devtree_2.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/DevTree`,
        topics: ['TypeScript', 'UI', 'Portfolio', 'Responsive'],
        language: 'TypeScript',
        stars_count: 0,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Last Month'
    },
    {
        id: 2,
        name: 'Study Control System',
        customDescription:
            'Academic management system developed for an institute. Includes administrative processes, records organization, and internal operational control.',
        images: [
            '/images/control_estudio_1.png',
            '/images/control_estudio_2.png',
            '/images/control_estudio_3.png'
        ],
        topics: ['TypeScript', 'Admin Panel', 'Database', 'Institute'],
        language: 'TypeScript',
        stars_count: 1,
        forks_count: 0,
        scope: 'Private System',
        status: 'Updated Mar 13'
    },
    {
        id: 3,
        name: 'Cinema Project',
        customDescription:
            'Cinema platform created with Vue. Includes movie listing interface, dynamic components, and a responsive user experience for browsing cinema content.',
        images: [
            '/images/cines_1.png',
            '/images/cines_2.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/Proyecto-Cines-Final`,
        topics: ['Vue', 'Frontend', 'Components', 'Cinema'],
        language: 'Vue',
        stars_count: 1,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Feb 26'
    },
    {
        id: 4,
        name: 'DevWebCamp',
        customDescription:
            'Conference website where users can purchase tickets, reserve spaces, and manage event registration. Includes transactional flows and user management.',
        images: [
            '/images/devwebcamp_1.png',
            '/images/devwebcamp_2.png',
            '/images/devwebcamp_3.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/DevWebCamp`,
        topics: ['PHP', 'MVC', 'Payments', 'Events'],
        language: 'PHP',
        stars_count: 0,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Feb 25'
    },
    {
        id: 5,
        name: 'UpTask',
        customDescription:
            'Project task management platform designed for organizing teams, activities, priorities, and delivery progress in collaborative environments.',
        images: [
            '/images/uptask_1.png',
            '/images/uptask_2.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/UpTask`,
        topics: ['PHP', 'Tasks', 'Productivity', 'Dashboard'],
        language: 'PHP',
        stars_count: 0,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Feb 25'
    },
    {
        id: 6,
        name: 'App Salon',
        customDescription:
            'Booking website for a barbershop / salon. Users can select services, schedule appointments, and navigate a clean business-oriented interface.',
        images: [
            '/images/salon_1.png',
            '/images/salon_2.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/App-Salon-`,
        topics: ['PHP', 'Booking', 'Appointments', 'Business'],
        language: 'PHP',
        stars_count: 0,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Feb 25'
    },
    {
        id: 7,
        name: 'Real estate',
        customDescription:
            'Real estate company website with property showcase, responsive sections, sales-oriented layout, and clean HTML/CSS architecture.',
        images: [
            '/images/bienes_1.png',
            '/images/bienes_2.png'
        ],
        link: `https://github.com/${GITHUB_USERNAME}/Bienes-Raices-Final`,
        topics: ['HTML', 'CSS', 'Real Estate', 'Responsive'],
        language: 'HTML',
        stars_count: 0,
        forks_count: 0,
        scope: 'Public Repository',
        status: 'Updated Feb 25'
    }
]

function Projects() {
    const containerRef = useRef(null)
    const sliderRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef })

    const [activeIndex, setActiveIndex] = useState(0)
    const [scrollRange, setScrollRange] = useState(0)

    const cardCount = projects.length
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, cardCount - 1)])

    useEffect(() => {
        const unsubscribe = currentIndex.on('change', (latest) => {
            const newIndex = Math.max(0, Math.min(Math.floor(latest + 0.5), cardCount - 1))
            setActiveIndex(newIndex)
        })
        return unsubscribe
    }, [currentIndex, cardCount])

    useEffect(() => {
        if (sliderRef.current) {
            const updateScrollRange = () => {
                const totalWidth = sliderRef.current.scrollWidth
                const visibleWidth = sliderRef.current.clientWidth
                const buffer = 100
                setScrollRange(Math.max(0, totalWidth - visibleWidth + buffer))
            }

            updateScrollRange()
            window.addEventListener('resize', updateScrollRange)
            return () => window.removeEventListener('resize', updateScrollRange)
        }
    }, [])

    const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${scrollRange}px`])

    return (
        <section id="projects" className={styles.projectsWrapper} ref={containerRef}>
            <div className={styles.stickyContainer}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-tag section-tag-Work" >
                            <Folder />
                            My Work
                        </span>
                        <h2 className="section-title">
                            <span className="gradient-text">Featured Projects</span>
                        </h2>
                        <p className="section-subtitle">
                            A selection of projects from my GitHub portfolio
                        </p>
                    </motion.div>
                </div>

                <div className={styles.sliderContainer}>
                    <motion.div
                        className={styles.slider}
                        style={{ x }}
                        ref={sliderRef}
                    >
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex

                            return (
                                <motion.article
                                    key={project.id || project.name}
                                    className={`${styles.projectCard} ${isActive ? styles.activeCard : ''}`}
                                    animate={{
                                        scale: isActive ? 1.1 : 0.9,
                                        zIndex: isActive ? 20 : 1,
                                        opacity: isActive ? 1 : 0.7
                                    }}
                                    whileHover={{ scale: isActive ? 1.12 : 0.95, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Project Images */}
                                    {project.images && project.images.length > 0 && (
                                        <div className={styles.projectImageWrapper}>
                                            {project.images.length === 1 ? (
                                                <img src={project.images[0]} alt={project.name} className={styles.projectImage} />
                                            ) : (
                                                <div
                                                    className={styles.imageCarousel}
                                                    style={{
                                                        '--total-images': project.images.length,
                                                        '--animation-duration': `${project.images.length * 3}s`
                                                    }}
                                                >
                                                    {project.images.map((img, imgIndex) => (
                                                        <img
                                                            key={imgIndex}
                                                            src={img}
                                                            alt={`${project.name} ${imgIndex + 1}`}
                                                            className={styles.carouselImage}
                                                            style={{
                                                                animationDelay: `${imgIndex * 3}s`
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            <div className={styles.imageOverlay}></div>
                                        </div>
                                    )}

                                    {/* Terminal Header */}
                                    <div className={styles.cardHeader}>
                                        <div className={styles.dots}>
                                            <span className={styles.dot}></span>
                                            <span className={styles.dot}></span>
                                            <span className={styles.dot}></span>
                                        </div>
                                        <span className={styles.cardPath}>~/projects/{project.name.toLowerCase().replace(/\s+/g, '-')}</span>
                                        <div className={styles.cardLinks}>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.cardLink}
                                                aria-label={`View ${project.name} on GitHub`}
                                            >
                                                <Github />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.projectTitle}>{project.name}</h3>
                                        <p className={styles.projectDescription}>{project.customDescription}</p>

                                        {/* Tags */}
                                        <div className={styles.projectTags}>
                                            {project.topics?.slice(0, 4).map((tag) => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className={styles.cardFooter}>
                                        <div className={styles.projectMeta}>
                                            <span className={styles.language}>
                                                <span
                                                    className={styles.languageDot}
                                                    style={{ background: getLanguageColor(project.language) }}
                                                ></span>
                                                {project.language || 'Unknown'}
                                            </span>
                                            <span className={styles.stars}>
                                                <Star />
                                                {project.scope}
                                            </span>
                                            <span className={styles.forks}>
                                                <GitFork />
                                                {project.status}
                                            </span>
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.viewProject}
                                            aria-label={`View source code for ${project.name}`}
                                        >
                                            View Code
                                            <ArrowRight />
                                        </a>
                                    </div>
                                </motion.article>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects