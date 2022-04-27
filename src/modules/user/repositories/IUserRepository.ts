


interface IUserRepository {
    create({name, email, password}: ICreateUserDTO) : Promise<void>
}


export { IUserRepository }
