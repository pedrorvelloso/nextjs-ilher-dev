import Anchor from '@/components/anchor'

type GithubCardLanguages = 'javascript' | 'typescript'

interface GithubCardProps {
  owner: string
  repo: string
  title: string
  description: string
  language: GithubCardLanguages
}

const languageColor = {
  javascript: 'bg-yellow-500',
  typescript: 'bg-blue-500',
}

function GithubCard({
  owner,
  repo,
  title,
  description,
  language,
}: GithubCardProps) {
  return (
    <div className="github-card border border-solid border-gray-400 dark:border-gray-700 w-full lg:w-1/2 p-4 rounded-md flex flex-col">
      <Anchor
        href={`https://github.com/${owner}/${repo}`}
        className="text-blue-500 font-bold"
      >
        {title}
      </Anchor>
      <div className="mb-6 mt-2 text-sm text-gray-700 dark:text-gray-400">
        {description}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-400 flex items-center gap-x-2">
        <div
          className={`w-3 h-3 ${
            languageColor[language.toLocaleLowerCase()]
          } rounded-full`}
        />
        {language}
      </div>
    </div>
  )
}

export default GithubCard
