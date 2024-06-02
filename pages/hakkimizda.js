import React from 'react'
import Nav from '@/components/Nav'
import '../app/globals.css'


export default function hakkimizda() {
  return (
    <div>
        <Nav></Nav>
       <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hakkımızda</h1>
            <p className="mb-4">
                UDU Finance, kripto para birimlerine yatırım yapma ve portföylerini yönetme konusunda kullanıcılarına hizmet veren bir finansal teknoloji şirketidir.
            </p>
            <p className="mb-4">
                Misyonumuz, kullanıcılarımıza güvenli, kullanıcı dostu ve yenilikçi bir platform sunmaktır. Kullanıcılarımızın kripto varlıklarını en iyi şekilde yönetmelerine yardımcı olmak için sürekli olarak platformumuzu geliştirmekteyiz.
            </p>
            <p className="mb-4">
                UDU Finance olarak, şeffaflık, güvenilirlik ve kullanıcı gizliliği bizim için önceliktir. Kullanıcılarımızın güvenini kazanmak ve sürdürmek için çalışıyoruz.
            </p>
            <p>
                Hizmetlerimiz hakkında daha fazla bilgi almak veya bize ulaşmak için lütfen bizimle iletişime geçin.
            </p>
        </div>
    </div>
  )
}
