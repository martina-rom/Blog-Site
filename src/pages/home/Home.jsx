import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sideebar from  "../../components/sideebar/Sideebar";

export default function Home() {
  return (
    <> 
      <Header />
      <div className="home">
          <Posts />
          <Sideebar />
      </div>
    </>
  )
}
