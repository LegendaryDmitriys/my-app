import React, {useState}from "react";
import './scss/setting.scss';
import axios from 'axios'
import User_Panel from "./modules/userpanel";
import jwt_decode from 'jwt-decode';

function Setting() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");


    const handleConfirmNewPasswordChange = (event) => {
      setConfirmNewPassword(event.target.value);
    };

    const handleOldPasswordChange = (event) => {
      setOldPassword(event.target.value);
    };
    
    const handleNewPasswordChange = (event) => {
      setNewPassword(event.target.value);
    };
    

    const handlePasswordChangeSubmit = async (event) => {
      event.preventDefault();
      if (newPassword !== confirmNewPassword) {
        setErrorMessage("Новые пароли не совпадают");
        return;
      }
      const token = localStorage.getItem("loginToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.data.user_id;
      try {
        const response = await axios.post("http://192.168.0.104/changePassword.php", {
          userId: userId,
          oldPassword: oldPassword,
          newPassword: newPassword,
        });
        setErrorMessage("");
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        alert("Пароль успешно изменен");
      } catch (error) {
        setErrorMessage("Ошибка изменения пароля");
      }
    };
    


    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
    
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };

    const handlePersonalDataSubmit = async (event) => {
      event.preventDefault();
      if (!firstName || !lastName) {
        setErrorMessage("Введите имя и фамилию");
        return;
      }
      const token = localStorage.getItem("loginToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.data.user_id;
      try {
        const response = await axios.post("http://192.168.0.104/PersonalData.php", {
          userId: userId,
          firstName: firstName,
          lastName: lastName,
        });
        setErrorMessage("");
        // обновляем переменные состояния в React для отображения новых данных
        setFirstName(firstName);
        setLastName(lastName);
      } catch (error) {
        setErrorMessage("Ошибка сохранения данных");
      }
    };


    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
      setFileUrl(URL.createObjectURL(event.target.files[0]));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!selectedFile) {
        setErrorMessage("Выберите файл");
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const response = await axios.post("http://192.168.0.104/addfile.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setFileUrl(response.data.fileUrl);
        setErrorMessage("");
        // отправляем запрос на сервер с url картинки, чтобы сохранить ее в базе данных
        const token = localStorage.getItem("loginToken");
          const decodedToken = jwt_decode(token);
          const userId = decodedToken.data.user_id;
        await axios.post("http://192.168.0.104/settings.php", {
          userId: userId,
          avatarUrl: response.data.fileUrl,
        });
        
      } catch (error) {
        setErrorMessage("Ошибка загрузки файла");
      }
    };
  
    return(
    <div>
        <div className="setting__wrapper">
            <User_Panel/>
            <div className="setting__profile">
                <div className="setting__avatar">
                    <h3>Аватар</h3>
                    {fileUrl && <img src={fileUrl} alt="avatar" />}
                    <form onSubmit={handleSubmit}>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit">Загрузить</button>
                    </form>
                    </div>
                <div className="setting__safety">
                    <h3>Безопастность</h3>
                    <form onSubmit={handlePasswordChangeSubmit}>
                    <div>
                      <p>Старый пароль</p>
                      <input type="password" placeholder="" value={oldPassword} onChange={handleOldPasswordChange} required />
                    </div>
                    <div>
                      <p>Новый пароль</p>
                      <input type="password" placeholder="" value={newPassword} onChange={handleNewPasswordChange} required />
                    </div>
                    <div>
                      <p>Повторите новый пароль</p>
                      <input type="password" placeholder="" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange} required />
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit">Сохранить</button>
                  </form>
                </div>
                <div className="setting__person">
                  <h3>Личные Данные</h3>
                  <form onSubmit={handlePersonalDataSubmit}>
                    <div>
                      <p>Введите имя</p>
                      <input type="text" placeholder="" value={firstName} onChange={handleFirstNameChange} required/>
                    </div>
                    <div>
                      <p>Введите фамилию</p>
                      <input type="text" placeholder="" value={lastName} onChange={handleLastNameChange} required/>
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit">Cохранить</button>
                  </form>
                </div>
             </div>   
        </div>
    </div>
    )
}

export default Setting;