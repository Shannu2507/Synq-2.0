import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <PostFeed />
        <ProfilePage />
      </div>
    </div>
  );
}
