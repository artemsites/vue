Для хранения функция помощников для многократного переиспользования

Use this file to register any variables or functions that should be available globally
ideally you should make it available via the window object
as well as the Vue prototype for access throughout the app
(register globals with care, only when it makes since to be accessible app wide)
 
Хотя меня постоянно предупреждали об опасности глобальных переменных, однажды я прочитал, 
что "небольшое количество глобальных переменных" — это очень удобная вещь, 
и с тех пор она мне уже не раз пригодилась. 
Благодаря этому файлу я легко узнаю, какие это глобальные переменные, 
и мне не нужно будет долго думать, когда захочется добавить новые.