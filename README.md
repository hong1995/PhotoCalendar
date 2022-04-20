# PhotoCalendar
Node.js와 MongoDb를 활용한 서버 사이드

Node.js를 활용하여 구축한 서버입니다.
간단한 로그인 창, index 창으로 구성되어 있습니다.

db 연동이 되어있지 않으며, 
로그인 시 login.js에서 간이로 작성해 둔 user 클래스의 id, password를 순서에 맞게 입력하면 로그인 됩니다.
  로그인 성공 시: afterlogin 으로 redirect.
  로그인 실패 시: alert로 실패 문구 뜸
