module.exports={
    configureWebpack:{
        resolve:{
            alias: {
                'common':'@/components/common',
                'content':'@/components/content',
                'image':'@/assets/images',
                'style':'@/assets/style',
                'home':'@/view/home',
                'network':'@/network'

            }
        }
    }
}