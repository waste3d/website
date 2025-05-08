import React, { useState } from 'react'; 
import clsx from 'clsx';  

const Project = ({ title, stack, children, inDevelopment = true }) => {   
  const [open, setOpen] = useState(false);    

  return (     
    <div       
      className="p-4 border-2 border-gray-700 rounded-md bg-zinc-900/30 backdrop-blur-xs cursor-pointer"       
      onClick={() => setOpen(!open)}     
    >       
      <div className="flex justify-between items-center">         
        <p className="text-gray-300 font-bold">{title}</p>         
        {inDevelopment && (           
          <div className="flex items-center gap-2">             
            <p className="text-gray-300 font-semibold">В разработке</p>             
            <i className="fa-solid fa-code"></i>           
          </div>         
        )}       
      </div>       
      <p className="text-sm text-gray-500">({stack})</p>        

      <div         
        className={clsx(           
          'transition-all duration-300 overflow-hidden',           
          open ? 'max-h-40 mt-2' : 'max-h-0'         
        )}       
      >         
        <div className="text-sm text-gray-300">           
          {children}         
        </div>       
      </div>     
    </div>   
  ); 
};

const ProjectList = () => (   
  <div>     
    <p className="text-2xl font-medium text-purple-400 mt-10 mb-2">       
      <i className="fa-solid fa-code"></i> Проекты:     
    </p>     
    <div className="flex flex-col gap-4">       
      <Project title="URL Shorter" stack="Golang, React">         
        <ul className="mb-5 text-sm">
          <li>• Сервис создания коротких ссылок.</li>
          <li>• Отображает количество переходов по ссылке и последний переход в формате "User-Agent - IP-адрес".</li>
          <li>• Современный UI создан при помощи React JS и TailwindCSS.</li>
          <li>• Интегрирован генератор QR-кодов по короткой ссылке.</li>
          <li>• Изменение цвета QR-Кода.</li>
          <li>• Добавлена возможность создания кастомной короткой ссылки.</li>
        </ul>
        <a
          href="https://github.com/waste3d/url-shortner"
          className="hover:text-purple-300 font-bold"
        >
          Репозиторий - Github <i className="fa-brands fa-github"></i>
        </a>
      </Project>

      <Project title="Card App" stack="Golang, React">         
        <ul className="mb-5 text-sm">
          <li>• Приложение для получения данных из полей ввода на примере банковской карты.</li>
          <li>• Данные из полей INPUT принимаются сервером в POST запросе в формате JSON, после чего отправляются в телеграмм-бота, созданного на Golang.</li>
        </ul>
        <a
          href="https://github.com/waste3d/card-app"
          className="hover:text-purple-300 font-bold"
        >
          Репозиторий - Github <i className="fa-brands fa-github"></i>
        </a>
      </Project>

      <Project title="ToDo REST API" stack="Golang" inDevelopment={false}>         
        <ul className="mb-5 text-sm">
          <li>• CRUD REST API для управления задачами.</li>
          <li>• Реализована возможность <b>Создания, удаления, изменения и получения</b> задач.</li>
        </ul>
        <a
          href="https://github.com/waste3d/todo-rest-api"
          className="hover:text-purple-300 font-bold"
        >
          Репозиторий - Github <i className="fa-brands fa-github"></i>
        </a>
      </Project>
    </div>   
  </div> 
);

export default ProjectList;
