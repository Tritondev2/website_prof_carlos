import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { useAuth } from '../context/AuthContext';

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const { user } = useAuth();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8 text-gray-900 min-h-screen">
        <p>Post not found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{post.date} - Prof. Carlos</p>
      <p className="mb-8 whitespace-pre-line">{post.content}</p>

      <section className="space-y-4">
        <div className="flex space-x-4">
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
            disabled={!user}
          >
            Like
          </button>
          <button
            className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
            disabled={!user}
          >
            Comment
          </button>
        </div>
        {!user && (
          <p className="text-sm text-gray-600">
            Faça login para reagir ou comentar neste post.
          </p>
        )}
      </section>
    </main>
  );
}
