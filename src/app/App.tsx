import Sidebar from "../components/Sidebar";
import PostFeed from "../components/PostFeed";
import ProfilePage from "../components/ProfilePage";

export default function App() {
  console.log("✅ App.tsx rendered!");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4">
        <div className="text-2xl font-bold text-green-600 mb-4">
          ✅ Synq is alive inside App.tsx
        </div>

        <PostFeed />
        <ProfilePage />
      </div>
    </div>
  );
}
