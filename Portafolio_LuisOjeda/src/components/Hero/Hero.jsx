import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

// SVG Icons
const ArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)

const Terminal = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
)

const Shield = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)

const Lock = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

// Typewriter effect for roles
const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Node.js / TypeScript Developer",
]

// Dynamic hero quotes - randomly selected on page load
const heroQuotes = [
    `I build web solutions that solve real problems, combining clean code, solid architecture, and a focus on user needs.`,

    `Backend, frontend, databases, and APIs — I enjoy turning ideas into functional and scalable applications.`,

    `Great software is not only about writing code, but about designing systems that are useful, maintainable, and reliable.`,

    `I like working on projects from analysis to deployment, always aiming for clarity, performance, and good structure.`,

    `Every project is an opportunity to learn, improve, and deliver something that creates real value for people.`,

    `I am a developer who enjoys building, debugging, and refining solutions until they work the right way.`,

    `From the first line of code to the final deployment, I focus on building software that is practical and well organized.`,

    `I like to combine logic, creativity, and discipline to create applications that are useful and scalable.`,

    `My goal is simple: write code that works well, solves problems, and is easy to maintain over time.`
]

// ============================================
// HOLOGRAPHIC TERMINAL - UPDATED FOR YOUR PROFILE
// ============================================

const HoloTerminal = () => {
    const [lines, setLines] = useState([])
    const [currentLine, setCurrentLine] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    const codeLines = [
        { text: '> Loading developer profile...', color: '#888', delay: 0 },
        { text: '> Name: Luis Ojeda', color: '#00ff88', delay: 100 },
        { text: '> Role: Full Stack Developer', color: '#00d4ff', delay: 80 },
        { text: '> Focus: Backend / APIs / Databases', color: '#ff79c6', delay: 80 },
        { text: '> Stack: Node.js, TypeScript, Next.js, Nest.js, PHP, React, Vue, SQL y NoSQL', color: '#f1fa8c', delay: 70 },
        { text: '', color: '#fff', delay: 40 },
        { text: '> Status: Available for remote work', color: '#50fa7b', delay: 100 },
        { text: '> Ready to build scalable solutions.', color: '#00ff88', delay: 120 },
    ]

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)
        return () => clearInterval(cursorInterval)
    }, [])

    useEffect(() => {
        if (currentLine >= codeLines.length) return

        const line = codeLines[currentLine]

        if (currentChar < line.text.length) {
            const timeout = setTimeout(() => {
                setCurrentChar(prev => prev + 1)
            }, 30 + Math.random() * 20)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, { ...line, text: line.text }])
                setCurrentLine(prev => prev + 1)
                setCurrentChar(0)
            }, line.delay)
            return () => clearTimeout(timeout)
        }
    }, [currentLine, currentChar])

    return (
        <div className={styles.holoTerminal}>
            <div className={`${styles.cornerAccent} ${styles.topLeft}`} />
            <div className={`${styles.cornerAccent} ${styles.topRight}`} />
            <div className={`${styles.cornerAccent} ${styles.bottomLeft}`} />
            <div className={`${styles.cornerAccent} ${styles.bottomRight}`} />

            <div className={styles.holoScanlines} />
            <div className={styles.holoBorder} />

            <div className={styles.holoHeader}>
                <div className={styles.holoHeaderLeft}>
                    <span className={styles.holoStatus} />
                    <span className={styles.holoTitle}>DEV TERMINAL</span>
                </div>
                <div className={styles.holoHeaderRight}>
                    <span>v1.0.0</span>
                    <span className={styles.holoTime}>
                        {new Date().toLocaleTimeString('en-US', { hour12: false })}
                    </span>
                </div>
            </div>

            <div className={styles.holoBody}>
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        className={styles.holoLine}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className={styles.lineNumber}>{String(i + 1).padStart(2, '0')}</span>
                        <span style={{ color: line.color }}>{line.text}</span>
                    </motion.div>
                ))}

                {currentLine < codeLines.length && (
                    <div className={styles.holoLine}>
                        <span className={styles.lineNumber}>
                            {String(lines.length + 1).padStart(2, '0')}
                        </span>
                        <span style={{ color: codeLines[currentLine].color }}>
                            {codeLines[currentLine].text.slice(0, currentChar)}
                        </span>
                        <span className={`${styles.holoCursor} ${showCursor ? styles.visible : ''}`}>█</span>
                    </div>
                )}
            </div>

            <div className={styles.holoFooter}>
                <span className={styles.holoFooterItem}>
                    <span className={styles.pulsingDot} /> AVAILABLE
                </span>
                <span className={styles.holoFooterItem}>BACKEND: NODE.JS</span>
                <span className={styles.holoFooterItem}>STATUS: ACTIVE</span>
            </div>
        </div>
    )
}

// Radar/Network visualization behind terminal
const NetworkRadar = () => {
    return (
        <div className={styles.radarContainer}>
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={styles.radarCircleWrapper}
                    style={{
                        width: `${i * 100}px`,
                        height: `${i * 100}px`,
                    }}
                >
                    <motion.div
                        className={styles.radarCircleInner}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                </div>
            ))}

            <motion.div
                className={styles.radarSweep}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const angle = (i / 8) * Math.PI * 2
                const radius = 100 + i * 10
                return (
                    <motion.div
                        key={i}
                        className={styles.networkNode}
                        style={{
                            left: `calc(50% + ${Math.cos(angle) * radius}px - 3px)`,
                            top: `calc(50% + ${Math.sin(angle) * radius}px - 3px)`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                )
            })}
        </div>
    )
}

// Data stream effect
const DataStream = () => {
    return (
        <div className={styles.dataStream}>
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className={styles.streamLine}
                    style={{ left: `${10 + i * 15}%` }}
                    animate={{
                        y: ['-100%', '100%'],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 2 + Math.random(),
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            ))}
        </div>
    )
}

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0 })

    const [quoteIndex] = useState(() => Math.floor(Math.random() * heroQuotes.length))
    const [typedQuote, setTypedQuote] = useState('')
    const [quoteTypingComplete, setQuoteTypingComplete] = useState(false)
    const [typingStarted, setTypingStarted] = useState(false)

    useEffect(() => {
        const startDelay = setTimeout(() => {
            setTypingStarted(true)
        }, 1000)
        return () => clearTimeout(startDelay)
    }, [])

    useEffect(() => {
        if (!typingStarted) return
        const quote = heroQuotes[quoteIndex]
        if (typedQuote.length < quote.length) {
            const timeout = setTimeout(() => {
                setTypedQuote(quote.slice(0, typedQuote.length + 1))
            }, 25)
            return () => clearTimeout(timeout)
        } else {
            setQuoteTypingComplete(true)
        }
    }, [typedQuote, quoteIndex, typingStarted])

    const firstName = "Luis"
    const lastName = "Ojeda"

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const token = import.meta.env.VITE_GITHUB_TOKEN
                const headers = {
                    'Accept': 'application/vnd.github.v3+json'
                }
                if (token) {
                    headers['Authorization'] = `token ${token}`
                }

                const response = await fetch('https://api.github.com/users/luisojeda', { headers })

                if (response.ok) {
                    const data = await response.json()
                    setGithubStats(prev => ({ ...prev, repos: data.public_repos }))
                } else {
                    console.error('GitHub API Error:', response.status)
                }
            } catch (err) {
                console.error('Error fetching GitHub stats:', err)
            }
        }
        fetchGitHubStats()
    }, [])

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const speed = isDeleting ? 50 : 100

        if (!isDeleting && displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000)
            return
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
            return
        }

        const timeout = setTimeout(() => {
            setDisplayText(prev =>
                isDeleting
                    ? prev.slice(0, -1)
                    : currentRole.slice(0, prev.length + 1)
            )
        }, speed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.matrixBg}></div>
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>
            <div className="scanline"></div>

            <div className={`container ${styles.heroContainer}`}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className={styles.statusBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.statusDot}></span>
                        <span>Available for Remote Work</span>
                    </motion.div>

                    <motion.div
                        className={styles.nameWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className={styles.name}>
                            <span className={styles.firstName}>{firstName}</span>
                            <span className={styles.lastName}>{lastName}</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className={styles.roleContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className={styles.rolePrefix}>{'>'} </span>
                        <span className={styles.role}>{displayText}</span>
                        <span className={styles.cursor}></span>
                    </motion.div>

                    <motion.div
                        className={styles.comboWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className={styles.comboCard}>
                            <p className={styles.comboPlaceholder} aria-hidden="true">
                                {heroQuotes[quoteIndex]}
                            </p>
                            <p
                                className={`${styles.comboText} ${quoteTypingComplete ? styles.comboGlitch : ''}`}
                                data-text={typedQuote}
                            >
                                {typedQuote}
                                {!quoteTypingComplete && <span className={styles.comboCursor}>|</span>}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.a
                            href="#projects"
                            className={`btn ${styles.btnPrimary}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Terminal />
                            View Projects
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get In Touch
                            <ArrowRight />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Backend</span>
                            <span className={styles.statLabel}>Focus</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Full Stack</span>
                            <span className={styles.statLabel}>Profile</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Remote</span>
                            <span className={styles.statLabel}>Ready</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.heroVisual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                >
                    <NetworkRadar />
                    <DataStream />
                    <HoloTerminal />

                    <motion.div
                        className={`${styles.floatingCmd} ${styles.cmdTop}`}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        $ npm run dev
                    </motion.div>

                    <motion.div
                        className={`${styles.floatingCmd} ${styles.cmdBottom}`}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        $ git commit -m "build"
                    </motion.div>

                    <motion.div
                        className={styles.portBadge}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <span className={styles.portLabel}>PORT</span>
                        <span className={styles.portNumber}>3000</span>
                        <span className={styles.portStatus}>LIVE</span>
                    </motion.div>

                    <motion.div
                        className={styles.cveBadge}
                        animate={{
                            y: [-3, 3, -3],
                            boxShadow: [
                                '0 0 15px rgba(255,0,100,0.3)',
                                '0 0 25px rgba(255,0,100,0.5)',
                                '0 0 15px rgba(255,0,100,0.3)'
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <span className={styles.cveText}>STACK</span>
                    </motion.div>

                    <svg className={styles.circuitLines} viewBox="0 0 100 100">
                        <motion.circle
                            cx="180"
                            cy="-5"
                            r="3"
                            fill="#00ff88"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle
                            cx="200"
                            cy="-5"
                            r="3"
                            fill="#00d4ff"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                        />
                    </svg>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className={styles.scrollLine}></div>
                <span>Scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero