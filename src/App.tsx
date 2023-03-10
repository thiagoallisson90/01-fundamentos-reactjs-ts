import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thiagoallisson90.png',
      name: 'Thiago Allisson',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', text: 'Fala galeraa 👋' },
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', text: '👉 jane.design/doctorcare' },
      { type: 'links', text: '#novoprojeto,#nlw,#rocketseat' },
    ],
    publishedAt: new Date('2023-03-05 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thiagoallisson90.png',
      name: 'Thiago Allisson',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', text: 'Fala galeraa 👋' },
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', text: '👉jane.design/doctorcare' },
      { type: 'links', text: '#novoprojeto,#nlw,#rocketseat' },
    ],
    publishedAt: new Date('2023-03-06 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
