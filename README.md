# Louis XIII Campaign Documentation
## API
#### AJAX API:

URL: http://xxx.samesamechina.com/ajax/api/message

HTTP Methods: POST

Param:
```javascript
{
  name: "name",
  message: "message"
}
```
Return JSON:
```javascript
{  status: "1",
  image_src: "http://xxxxx"
}```
error
```javascript
{
  status: error code
}
```error code:
	0 //failed, 101 //name is empty, 102 //message is empty, 999 //undifined error

Demo:
```javascript
$.ajax({
  url: "/ajax/api/message",
  cache: false,
  dataType: 'json',
  type: "POST",
  data: {
    name: "name",
    message: "message"
  }
}).done(function(data) {
  if(data.status == "1") {
    console.log(data.image_src);
  }
});
```
#### Page
URL: http://xxx.samesamechina.com/message/{id}
