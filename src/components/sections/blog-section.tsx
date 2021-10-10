import PostPreview from '@/components/post-preview'

const imageLink =
  'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'

function BlogSection() {
  return (
    <div className="relative">
      <div className="mx-10vw py-12 backdrop-blur-sm">
        <h1 className="text-2xl dark:text-white font-bold">Blog</h1>
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 mt-6">
          <PostPreview
            title="soon"
            description="coming soon..."
            image={{
              url: imageLink,
              author: 'James Harrison',
              unsplashUrl: 'https://unsplash.com/photos/vpOeXr5wmR4',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogSection
