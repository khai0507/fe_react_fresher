export  interface ILogin {

    access_token :string,

    user: {
      email: string,
      phone: string,
      fullName : string,
      role: string,
      avatar: string,
      id:string
    }


  }


export interface IRegister {
          id: string,
        email: string,
        fullName: "abc"
}