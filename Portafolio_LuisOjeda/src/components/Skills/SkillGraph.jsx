import { motion } from 'framer-motion'
import { useMemo } from 'react'
import styles from './Skills.module.css'

const Fingerprint = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }} aria-hidden="true">
        <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10v.8c0 1.25-.97 2.2-2.12 2.2-1.03 0-1.88-.84-1.88-1.88V12c0-3.31-2.69-6-6-6s-6 2.69-6 6v2.5c0 1.5 1.13 2.7 2.63 2.7h.37c2.2 0 4-1.8 4-4 0-1.1-.9-2-2-2s-2 .9-2 2v2" />
    </svg>
)

// Skill Data Structure
const skillData = {
    id: 'core',
    label: 'Luis Ojeda',
    type: 'core',
    children: [
        {
            id: 'frontend',
            label: 'Frontend',
            type: 'category',
            color: '#00d4ff',
            children: [
                { id: 'html', label: 'HTML', type: 'skill' },
                { id: 'css', label: 'CSS', type: 'skill' },
                { id: 'js', label: 'JavaScript', type: 'skill' },
                { id: 'ts', label: 'TypeScript', type: 'skill' },
                { id: 'react', label: 'React', type: 'skill' },
                { id: 'vue', label: 'Vue', type: 'skill' },
                { id: 'next', label: 'Next.js', type: 'skill' },
                { id: 'sass', label: 'SASS', type: 'skill' },
                { id: 'tailwind', label: 'Tailwind', type: 'skill' },
                { id: 'bootstrap', label: 'Bootstrap', type: 'skill' },
            ]
        },
        {
            id: 'backend',
            label: 'Backend',
            type: 'category',
            color: '#00ff88',
            children: [
                { id: 'node', label: 'Node.js', type: 'skill' },
                { id: 'express', label: 'Express', type: 'skill' },
                { id: 'nestjs', label: 'NestJS', type: 'skill' },
                { id: 'rest', label: 'REST APIs', type: 'skill' },
                { id: 'jwt', label: 'JWT', type: 'skill' },
                { id: 'prisma', label: 'Prisma', type: 'skill' },
                { id: 'sequelize', label: 'Sequelize', type: 'skill' },
                { id: 'mongoose', label: 'Mongoose', type: 'skill' },
            ]
        },
        {
            id: 'databases',
            label: 'Databases',
            type: 'category',
            color: '#bd00ff',
            children: [
                { id: 'sql', label: 'SQL', type: 'skill' },
                { id: 'mariadb', label: 'MariaDB', type: 'skill' },
                { id: 'postgresql', label: 'PostgreSQL', type: 'skill' },
                { id: 'sqlite', label: 'SQLite', type: 'skill' },
                { id: 'mongodb', label: 'MongoDB', type: 'skill' },
                { id: 'mysqlworkbench', label: 'MySQL Workbench', type: 'skill' },
                { id: 'dbeaver', label: 'DBeaver', type: 'skill' },
            ]
        },
        {
            id: 'tools',
            label: 'Tools',
            type: 'category',
            color: '#ffb703',
            children: [
                { id: 'git', label: 'Git', type: 'skill' },
                { id: 'github', label: 'GitHub', type: 'skill' },
                { id: 'vscode', label: 'VS Code', type: 'skill' },
                { id: 'jira', label: 'Jira', type: 'skill' },
                { id: 'laragon', label: 'Laragon', type: 'skill' },
                { id: 'pseint', label: 'PSeInt', type: 'skill' },
                { id: 'wireframe', label: 'Wireframe Sketcher', type: 'skill' },
                { id: 'gulp', label: 'Gulp', type: 'skill' },
            ]
        },
        {
            id: 'softskills',
            label: 'Soft Skills',
            type: 'category',
            color: '#ff5f8f',
            children: [
                { id: 'scrum', label: 'Scrum', type: 'skill' },
                { id: 'teamwork', label: 'Teamwork', type: 'skill' },
                { id: 'leadership', label: 'Leadership', type: 'skill' },
                { id: 'time', label: 'Time Management', type: 'skill' },
                { id: 'communication', label: 'Communication', type: 'skill' },
            ]
        }
    ]
}

const SkillGraph = () => {
    // Generate Positions (Radial Layout)
    const nodes = useMemo(() => {
        const nodeList = []
        const edgesList = []

        // Center
        nodeList.push({ ...skillData, x: 50, y: 50, level: 0 })

        // Categories (Level 1)
        const catCount = skillData.children.length
        skillData.children.forEach((cat, i) => {
            const angle = (i / catCount) * 2 * Math.PI - Math.PI / 2
            const radius = 25
            const x = 50 + Math.cos(angle) * radius * 1.5
            const y = 50 + Math.sin(angle) * radius

            nodeList.push({ ...cat, x, y, level: 1, parentId: 'core' })
            edgesList.push({ from: 'core', to: cat.id, color: cat.color })

            // Skills (Level 2)
            const skillCount = cat.children.length
            const angleSpan = (2 * Math.PI) / catCount
            const startAngle = angle - angleSpan / 2

            cat.children.forEach((skill, j) => {
                const isFrontend = cat.id === 'frontend'
                const isBackend = cat.id === 'backend'
                const isDatabases = cat.id === 'databases'
                const isTools = cat.id === 'tools'
                const isSoftSkills = cat.id === 'softskills'

                let spreadFactor = 0.75
                let startOffset = 0.1

                if (isFrontend) {
                    spreadFactor = 1.0
                    startOffset = -0.03
                } else if (isBackend) {
                    spreadFactor = 0.9
                    startOffset = 0.03
                } else if (isDatabases) {
                    spreadFactor = 0.88
                    startOffset = 0.05
                } else if (isTools) {
                    spreadFactor = 0.78
                    startOffset = 0.12
                } else if (isSoftSkills) {
                    spreadFactor = 0.72
                    startOffset = 0.16
                }

                const skillAngle = skillCount === 1
                    ? startAngle
                    : startAngle + (j / (skillCount - 1)) * angleSpan * spreadFactor + (angleSpan * startOffset)

                const skillRadius = 45
                const sx = 50 + Math.cos(skillAngle) * skillRadius * 1.5
                const sy = 50 + Math.sin(skillAngle) * skillRadius

                nodeList.push({ ...skill, x: sx, y: sy, level: 2, parentId: cat.id, color: cat.color })
                edgesList.push({ from: cat.id, to: skill.id, color: cat.color })
            })
        })

        return { nodeList, edgesList }
    }, [])

    return (
        <div className={styles.graphContainer}>
            <svg className={styles.connections} aria-hidden="true">
                {nodes.edgesList.map((edge, i) => {
                    const fromNode = nodes.nodeList.find(n => n.id === edge.from)
                    const toNode = nodes.nodeList.find(n => n.id === edge.to)

                    if (!fromNode || !toNode) return null

                    return (
                        <motion.line
                            key={i}
                            x1={`${fromNode.x}%`}
                            y1={`${fromNode.y}%`}
                            x2={`${toNode.x}%`}
                            y2={`${toNode.y}%`}
                            stroke={edge.color}
                            strokeWidth="2"
                            strokeOpacity="0.8"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    )
                })}
            </svg>

            {nodes.nodeList.map((node) => (
                <Node key={node.id} node={node} />
            ))}
        </div>
    )
}

const Node = ({ node }) => {
    return (
        <motion.div
            className={`${styles.node} ${styles[node.type]}`}
            style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                borderColor: node.color,
                boxShadow: `0 0 20px ${node.color}40`,
                transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: node.level * 0.2
            }}
            whileHover={{ scale: 1.2, zIndex: 100 }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            role="img"
            aria-label={node.label}
        >
            <div className={styles.nodeContent} style={{ color: node.color || '#fff' }}>
                {node.level === 0 ? <div style={{ marginBottom: 5 }}><Fingerprint /></div> : null}
                <span className={styles.nodeLabel}>{node.label}</span>
            </div>

            {node.level < 2 && (
                <motion.div
                    className={styles.orbitRing}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{ borderColor: node.color }}
                    aria-hidden="true"
                />
            )}
        </motion.div>
    )
}

export default SkillGraph
