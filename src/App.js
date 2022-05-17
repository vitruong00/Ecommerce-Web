import Home from "./components/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/routes/navigation/navigation.component";
import { SignIn } from "./components/routes/signin/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
