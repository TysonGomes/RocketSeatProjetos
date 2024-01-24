import { GithubUser } from "./GithubUser.js"


//classe da logica de dados 

export class Favorites {
    constructor(root){
        this.root=document.querySelector(root)

        
        this.load()
      // GithubUser.search('diego3g').then(user=>console.log(user))
    }

    load()
    {
            this.entries =JSON.parse(localStorage.getItem(
                '@github-fav:'
            )) || []


        /*this.entries=[{
            login: 'maykbrito',
            name:"Mayk Brito",
            public_repos:"76",
            follwers: '120000'

        },
        {
            login: 'diego3g',
            name:"Diego Fernandes",
            public_repos:"76",
            follwers: '120000'  
        }
        ] */
    
    }

    save(){
        localStorage.setItem('@github-fav:',JSON.stringify(this.entries))
    }

   
    async add(username){
        try{

           const userExists = this.entries.find(entry => entry.login.toLowerCase() === username.toLowerCase()) 
            console.log(userExists,username)

                if(userExists){
                    throw new  Error ('usuario ja cadastrado')
                }


        const user =await GithubUser.search(username)

        if(user.login === undefined){
            throw new Error('Usuario não encontrado')
        }
        this.entries =[user,...this.entries]
        this.update()
        this.save()

        }catch(error){
            alert(error.message)
        }
    }
    delete(user){
        const filterdEntries =this.entries.
        filter(entry =>entry.login !== user.login)
        
        this.entries=filterdEntries 
        this.update()
        this.save()
    }
}




//classe que vai criar o visual html
export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
    }


    onadd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick=()=>{
            const {value}= this.root.querySelector('.search input') 
            this.add(value)
        }
    }

    update(){
        this.removeAllTr()

        if (this.entries.length==0){
            console.log(this.entries)
            const row=this.emptyRow()
            row.querySelector('.empty img').src=`../assets/Estrela.svg`
          
            this.tbody.append(row)
            return
        }
       //const entries=
        
       this.entries.forEach(user=>{
        const row = this.createRow()
        console.log(row)
        row.querySelector('.user img').src=`https://github.com/${user.login}.png`
        row.querySelector('.user img').alt=`Imagem de ${user.name}`
        row.querySelector('.user a').href = `https://github.com/${user.login}`
        row.querySelector('.user p').textContent= user.name
        row.querySelector('.user span').textContent= `/${user.login}`
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers ').textContent =user.followers
       
        row.querySelector('.remove').onclick =()=>{
            const isOK = confirm ('Tem ceteza que deseja deletar essa linha ?')
            if (isOK){
                this.delete(user)
            }   
        }


        this.tbody.append(row)
       })    

    }

    createRow(){
        const tr = document.createElement('tr')
        const content= `<td class="user">
            <img src="" alt="">
            <a href="http://"> <p></p>
            <span></span>
            </a>
           
           
            </td>
                <td class="repositories"></td>
                <td class="followers"></td>
                <td> 
                <button class="remove">Remover</button> 

             </td>`
             tr.innerHTML=content

             return tr
                }
    emptyRow(){
        const tr = document.createElement('tr')
        const content=`<td class="empty" colspan=2>
        <img src ="./assets/Estrela.svg">
        </td>
        <td colspan=3><h3>Não há favoritos </h3>
        </td>`
        tr.innerHTML=content
        return tr
    }            

    removeAllTr(){
       // const tbody = this.root.querySelector('table tbody')

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
            
        });
    }
}