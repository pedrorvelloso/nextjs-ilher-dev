import CodeWindow from '@/components/code-window'
import Section from '@/components/section'

const frontendStack = `{
  "languages": [
    "javscript",
    "typescript"
  ],
  "libsAndFrameworks": [
    "React",
    "NextJS",
    "Vue",
    "Angular"
  ],
  "styling": [
    "styled-components",
    "emotion",
    "x-styled",
    "tailwind"
  ],
  "mobile": [
    "React Native",
    "Flutter"
  ]
}`

const backendStack = `{
  "languages": [
    "typescript",
    "javascript",
    "java",
    "scala",
    "go",
    "php"
  ],
  "databases": [
    "mongodb",
    "postgres",
    "redis",
    "mysql",
  ],
  "frameworks": [
    "nestjs",
    "adonis",
    "springboot",
    "akka",
    "typegraphql"
  ]
}`

const infraStack = `{
  "services": [
    "aws",
    "googleCloudPlatform",
    "azure"
  ],
  "tools": [
    "git",
    "docker",
    "jenkins",
    "graphana",
    "k8s"
  ]
}`

function StackSection() {
  return (
    <div className="bg-gray-300 dark:bg-color-section py-8">
      <Section className="grid grid-cols-1 gap-y-4 gap-x-4 xl:gap-x-8 lg:grid-cols-3 justify-items-center mx-0">
        <CodeWindow title="frontend.json" code={frontendStack} />
        <CodeWindow title="backend.json" code={backendStack} />
        <CodeWindow title="infra.json" code={infraStack} />
      </Section>
    </div>
  )
}

export default StackSection
