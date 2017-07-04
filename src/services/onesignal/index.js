const OneSignal = window.OneSignal || []

const init = () => {
  OneSignal.push(['init', {
    appId: `${process.env.ONE_SIGNAL_APP_ID}`,
    allowLocalhostAsSecureOrigin: true,
    autoRegister: true,
    notifyButton: {
      enable: false
    },
    welcomeNotification: {
      title: 'Notificações Ativas',
      message: 'Você agora receberá notificações de nossas notícias!'
    },
    promptOptions: {
      actionMessage: 'Receba notificações sobre nossas novidades!',
      acceptButtonText: 'Permitir',
      cancelButtonText: 'Não, obrigado(a)'
    }
  }])
}

const prompt = () => {
  console.log('Prompt called!')
  OneSignal.push(() => {
    OneSignal.isPushNotificationsEnabled()
    .then((isEnabled) => {
      if (isEnabled) {
        console.log('Push notifications are enabled!')
      } else {
        console.log('Push notifications are not enabled yet.')
        OneSignal.showHttpPermissionRequest()
      }
    })
  })
}

export default {
  init,
  prompt
}
