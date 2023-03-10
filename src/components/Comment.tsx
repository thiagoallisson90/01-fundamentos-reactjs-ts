import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    // setLikeCount(likeCount+1)
    setLikeCount((state) => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagoallisson90.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Allisson</strong>
              <time
                title="07 de março às 08:00"
                dateTime="2023-03-07 09:00:10s"
              >
                Publicado há 1 dia
              </time>
            </div>

            <button onClick={() => { 
                  if (window.confirm('tem certeza que quer deletar este comentário?')) {
                    handleDeleteComment() 
                  } 
                }
              } 
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          {/* <p>Muito bom, Devon, parabéns!{' '}👏👏</p> */}
          <p>{ content }</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}