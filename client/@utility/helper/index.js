export const  checkPermission = (userPermissions) => {
  const authArr = JSON.parse(window.localStorage.getItem('TOKEN'))
  let permission_array = []
  if(authArr){
      permission_array = authArr.permission_array
  }
  // console.log("permission_array ::", permission_array)
  if (permission_array) {
      if (userPermissions && Array.isArray(userPermissions)) {
          return permission_array.some(r => userPermissions.indexOf(r) >= 0);
      }
      return permission_array.includes(userPermissions)
  }else{
      return false
  }
}