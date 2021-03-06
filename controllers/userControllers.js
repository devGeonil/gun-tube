import routes from "../routes";

//JOIN
export const getJoin = (req,res) =>{
  res.render("join", {pageTitle: 'join'});
}

export const postJoin = (req, res )=>{
  const { body:{name,email,password,password2}} =req;
  if(password !== password2){
    res.status(400)
  }else{
    //todo: register user
    //todo: log user in
    res.redirect(routes.home)
  }
}


//LOGIN
export const getLogin = (req,res) => res.render("login", {pageTitle: 'login'});
export const postLogin = (req, res) => {
  res.redirect(routes.home);
}

export const users = (req, res) => res.render("users", {pageTitle: 'users'});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: 'userDetail'});

//logout
export const logout = (req,res) => {
  res.render("logout", {pageTitle:'logout'});
}



export const editProfile = (req, res) => res.render("editProfile", {pageTitle: 'editProfile'});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: 'changePassword'});
