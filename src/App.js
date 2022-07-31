import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from 'containers/pages/blog/Blog';
import BlogPost from 'containers/pages/blog/BlogPost';
import BlogCategory from 'containers/pages/blog/category/BlogCategory';
import Search from 'containers/pages/Search';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          {/* Home Display */}
          <Route path="/" element={<Home/>}/>

          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/post/:slug" element={<BlogPost/>}/>
          <Route path="/blog/categories/:category_id" element={<BlogCategory/>}/>

          <Route path="/search/:term" element={<Search/>}/>


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
