import { ImageResponse } from 'next/og'

export const alt = 'Nitin Kumar Patwa - Full-Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: '#F1F1EE',
          color: '#101010',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          border: '12px solid #CBFF44',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '0.15em' }}>
            / PORTFOLIO 2026
          </div>
          <div
            style={{
              background: '#CBFF44',
              color: '#101010',
              padding: '8px 20px',
              fontSize: 20,
              fontWeight: 'bold',
              border: '2px solid #101010',
            }}
          >
            FULL-STACK DEVELOPER
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: 72, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
            NITIN KUMAR PATWA
          </div>
          <div style={{ fontSize: 28, color: '#6B6B68', maxWidth: '900px', lineHeight: 1.4 }}>
            Full-Stack Web Developer • React.js • Node.js • AWS ECS • Microservices
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #101010',
            paddingTop: '20px',
            fontSize: 20,
            fontFamily: 'monospace',
          }}
        >
          <div>UTTAR PRADESH, INDIA</div>
          <div>GITHUB.COM/LOBBY11</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
