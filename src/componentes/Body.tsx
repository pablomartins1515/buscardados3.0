import  Pesquisador  from './Pesquisador'

export function Body() {

    return (        
        <body className='flex gap-2'> 

            <main className='justify-center'>

                <span>
                    <Pesquisador />
                </span>

                <div className=''>
                    <h1 className="py-16  text-center font-black text-5xl text-blue-900">
                        Vai comprar um veículo?
                    </h1>

                    <h2 className="text-center justify-center text-xl mb-8" >
                        Saber seu histórico nunca foi tão fácil! <br />
                        Por <strong>apenas</strong> <strong className='text-blue-900'>R$ 8,99</strong> consulte pela placa e <br /> receba diversas informações. 😉
                    </h2>                    
                </div>
            </main>
                

            
        </body>
    )
}


// className="px-10 max-w-3xl  right-4"




