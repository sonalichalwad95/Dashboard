const callAPI = async () => {
  const balance: any = await fetch(
    'https://1.api.fy23ey01.careers.ifelsecloud.com/',
  )
    .then(reply => reply.json())
    .then(balance => {
      return balance;
    })
    .catch(error => {
      console.error(error);
    });
  console.log('balance>>', balance);

  return balance;
};

export default callAPI;
