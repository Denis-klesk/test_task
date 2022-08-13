function testService(events) {

  if (events.length === 0)
  {
    return (true);
  }
 else {

  let usersData = [];

  for (let i = 0; i < events.length; i++)
    {
      if (events[i][1] === 'in')
        {

        if (usersData.length === 0)
                    {
                      usersData.push(events[i]);

                    }

        else {
        
           for (let j = 0; j < usersData.length; j++)
        {
          if ((usersData[j][0] === events[i][0]) && (usersData[j][1] === events[i][1]))
        
         {
           console.log(`usersData_in ${j}`, usersData[j], events[i]);
           console.log(`break`);
           return (false);

          }
          
          }
        
        usersData.push(events[i]);

        
        
        }
        
          

        }
      else 
        { 
      
        for (let j = 0; j < usersData.length; j++)
        {
          if ((usersData[j][0] === events[i][0]) && (usersData[j][1] !== events[i][1]))
        
         {

           let index =  usersData.indexOf(usersData[j]);

           usersData.splice(index, 1);


          }
          
          else
          {

           return (false);
          }
          
          
        }
         
        
        
        }

      }
      
       console.log('usersData', usersData);
       if (usersData.length === 0)
       {
       return (true);
       }
      else 
      {
       return (false);
      }




}

}

module.exports = testService
