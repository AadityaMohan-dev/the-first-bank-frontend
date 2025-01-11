import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import RecentTransactions from './RecentTransactions';
import bank from'../../assets/passbook.png';
import payment from'../../assets/credit-card.png';
import transfer from'../../assets/money-transfer.png';

function MainScreen() {
  return (
    <div className='flex h-screen bg-zinc-100'>
      <aside id="sidebar" className="w-72"> {/* Sidebar with fixed width */}
        <Sidebar />
      </aside>
      
      <main id="dashboard" className=' flex-1 overflow-y-auto'> {/* Flex-1 ensures it takes up available space */}
        <section id="info" className='rounded-lg bg-white px-10 pt-5  w-full h-full'>
          <div id="greetings" className='pb-5 text-3xl flex gap-3'>
            Hi, <span className='text-[#2E8B57]'>Aaditya Mohan</span>, Welcome to
            <span className='text-[#2E8B57]'>First Bank</span>.
          </div>
          
          <div id="row" className='pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
            <div id="account-details" className='  rounded-lg h-40 hover:bg-white hover:border hover:border-[#2E8B57] bg-[#2E8B57] capitalize  items-center  grid justify-center'><img src={bank} alt="" width={100}/></div>
            <div id="user-details" className='  rounded-lg h-40 hover:bg-white hover:border hover:border-[#2E8B57] bg-[#2E8B57] capitalize text-center items-center grid justify-center'><img src={transfer} alt="" width={100}/></div>
            <div id="send-money" className=' rounded-lg h-40 hover:bg-white hover:border hover:border-[#2E8B57] bg-[#2E8B57] capitalize text-center items-center grid justify-center '><img src={payment} alt="" width={130}/></div>
          </div>

          <h3 className='capitalize text-[#2E8B57] text-2xl pt-5'>Recent Transactions</h3>
          <section className='py-5 max-h-[400px] overflow-auto'> {/* Limit height and enable scrolling for Recent Transactions */}
            <RecentTransactions />
          </section>
        </section>
      </main>
    </div>
  );
}

export default MainScreen;
