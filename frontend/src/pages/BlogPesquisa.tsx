import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface IPost {
  id: number;
  title: string;
  content: string;
  author_email: string;
  created_at: string;
}

interface IComment {
    id: number;
    content: string;
    author_email: string;
    created_at: string;
}

function CommentSection({ postId }: { postId: number }) {
  const { isAuthenticated, token } = useAuth();
  const [comments, setComments] = useState<IComment[]>([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    try {
        // BUG CORRIGIDO: Agora busca os comentários do post específico
        const response = await fetch(`/api/posts/${postId}/comments`);
        if(response.ok) {
            const data = await response.json();
            setComments(data);
        }
    } catch (error) {
        console.error("Erro ao buscar comentários:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
        // CORRIGIDO: usa o caminho relativo
        await fetch(`/api/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ content: newComment })
        });
        setNewComment('');
        fetchComments();
    } catch (error) {
        console.error("Erro ao enviar comentário:", error);
    }
  };

  // O restante do JSX continua o mesmo...
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comentários</h3>
      <div className="space-y-3 mb-4">
        {comments.length > 0 ? (
            comments.map(comment => (
                <div key={comment.id} className="bg-gray-100 p-3 rounded-md">
                    <p className="text-gray-800">{comment.content}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        - {comment.author_email} em {new Date(comment.created_at).toLocaleDateString()}
                    </p>
                </div>
            ))
        ) : (
            <p className="text-sm text-gray-500">Nenhum comentário ainda.</p>
        )}
      </div>
      {isAuthenticated ? (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={2}
            placeholder="Escreva seu comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit" className="mt-2 bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800">
            Comentar
          </button>
        </form>
      ) : (
        <p className="text-sm text-gray-600">
          Você precisa fazer <button onClick={() => {/* idealmente, abrir o modal de login */}} className="font-bold underline text-blue-700">login</button> para comentar.
        </p>
      )}
    </div>
  );
}


export default function BlogPesquisa() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // CORRIGIDO
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };
    fetchPosts();
  }, []);
  
  // O restante do JSX continua o mesmo...
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog de Pesquisa</h1>
        {isAuthenticated && (
          <Link to="/blog/novo" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            + Criar Novo Post
          </Link>
        )}
      </div>

      {posts.length > 0 ? (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-blue-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                Por {post.author_email} em {new Date(post.created_at).toLocaleDateString()}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>

              <hr className="my-6" />
              <CommentSection postId={post.id} />
            </article>
          ))}
        </div>
      ) : (
        <p>Nenhum post encontrado. Seja o primeiro a criar um!</p>
      )}
    </main>
  );
}