import { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'
import styles from './Skills.module.css'

const mySkills = [
    'JavaScript', 'TypeScript', 'React', 'Vue',
    'Next.js', 'Node.js', 'Express', 'NestJS',
    'HTML', 'CSS', 'SASS', 'Tailwind',
    'Bootstrap', 'SQL', 'PostgreSQL', 'MongoDB',
    'Prisma', 'Git', 'GitHub', 'Jira',
    'VS Code', 'Laragon', 'DBeaver', 'MySQL Workbench'
]

const TechCloud = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current
            container.innerHTML = ''

            TagCloud(container, mySkills, {
                radius: 300,
                maxSpeed: 'fast',
                initSpeed: 'normal',
                direction: 135,
                keep: true,
                useContainerInlineStyles: false,
                containerClass: 'tagcloud',
                itemClass: 'tagcloud-item'
            })
        }
    }, [])

    return (
        <div className={styles.cloudWrapper}>
            <div ref={containerRef} className={styles.cloudContainer}></div>
        </div>
    )
}

export default TechCloud
