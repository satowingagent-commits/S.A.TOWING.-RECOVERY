export function SanAntonioSkyline() {
  return (
    <svg 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
      viewBox="0 0 1440 700" 
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#070300" />
          <stop offset="40%" stopColor="#0e0500" />
          <stop offset="70%" stopColor="#180800" />
          <stop offset="100%" stopColor="#3a1200" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softglow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="700" fill="url(#sky)" />

      {/* Background buildings (far, dark) */}
      <g fill="#0e0500" opacity="0.8">
        <rect x="0" y="480" width="45" height="220" />
        <rect x="30" y="460" width="35" height="240" />
        <rect x="55" y="500" width="50" height="200" />
        <rect x="90" y="470" width="40" height="230" />
        <rect x="115" y="490" width="55" height="210" />
        <rect x="1320" y="475" width="50" height="225" />
        <rect x="1355" y="455" width="40" height="245" />
        <rect x="1385" y="495" width="55" height="205" />
      </g>

      {/* Mid buildings */}
      <g fill="#180800" opacity="0.9">
        <rect x="0" y="430" width="60" height="270" />
        <rect x="45" y="400" width="50" height="300" />
        <rect x="85" y="450" width="70" height="250" />
        <rect x="140" y="420" width="55" height="280" />
        <rect x="185" y="440" width="65" height="260" />
        <rect x="240" y="410" width="50" height="290" />
        <rect x="280" y="460" width="75" height="240" />
        <rect x="1080" y="440" width="65" height="260" />
        <rect x="1135" y="415" width="55" height="285" />
        <rect x="1180" y="445" width="70" height="255" />
        <rect x="1240" y="420" width="60" height="280" />
        <rect x="1290" y="435" width="75" height="265" />
        <rect x="1355" y="410" width="55" height="290" />
        <rect x="1400" y="450" width="40" height="250" />
      </g>

      {/* Foreground buildings left */}
      <g fill="#1a0a00" opacity="0.95">
        <rect x="0" y="370" width="80" height="330" />
        <rect x="70" y="350" width="65" height="350" />
        <rect x="125" y="390" width="90" height="310" />
        <rect x="145" y="360" width="55" height="340" />
        <rect x="160" y="330" width="30" height="370" />
        <rect x="205" y="380" width="85" height="320" />
        <rect x="225" y="345" width="50" height="355" />
        <rect x="280" y="300" width="40" height="400" />
        <rect x="270" y="360" width="60" height="340" />
        <rect x="320" y="380" width="95" height="320" />
        <rect x="340" y="350" width="60" height="350" />
        <rect x="405" y="395" width="80" height="305" />
        <rect x="420" y="365" width="50" height="335" />
        <rect x="475" y="370" width="70" height="330" />
        <rect x="490" y="340" width="40" height="360" />
      </g>

      {/* Foreground buildings right */}
      <g fill="#1a0a00" opacity="0.95">
        <rect x="895" y="370" width="70" height="330" />
        <rect x="910" y="340" width="40" height="360" />
        <rect x="955" y="395" width="80" height="305" />
        <rect x="970" y="365" width="50" height="335" />
        <rect x="1025" y="370" width="95" height="330" />
        <rect x="1045" y="345" width="60" height="355" />
        <rect x="1110" y="300" width="40" height="400" />
        <rect x="1100" y="360" width="60" height="340" />
        <rect x="1150" y="380" width="85" height="320" />
        <rect x="1170" y="345" width="50" height="355" />
        <rect x="1215" y="390" width="90" height="310" />
        <rect x="1235" y="360" width="55" height="340" />
        <rect x="1250" y="330" width="30" height="370" />
        <rect x="1290" y="350" width="65" height="350" />
        <rect x="1360" y="370" width="80" height="330" />
      </g>

      {/* Tower of the Americas (center hero) */}
      <g filter="url(#softglow)">
        <rect x="670" y="560" width="100" height="140" fill="#1a0a00" opacity="0.95" />
        <polygon points="700,560 740,560 736,200 704,200" fill="#1a0a00" opacity="0.98" />
        <polygon points="718,560 722,560 720,200 718,200" fill="#cc2200" opacity="0.4" />
        <ellipse cx="720" cy="195" rx="48" ry="12" fill="#1a0a00" opacity="0.98" />
        <rect x="672" y="183" width="96" height="20" fill="#1a0a00" opacity="0.98" />
        <rect x="672" y="178" width="96" height="8" fill="#cc2200" opacity="0.7" />
        <rect x="716" y="130" width="8" height="55" fill="#1a0a00" opacity="0.98" />
        <rect x="717" y="125" width="6" height="10" fill="#ff4400" opacity="0.8" />
        <circle cx="720" cy="122" r="5" fill="#ff4400" opacity="1.0" filter="url(#glow)" />
        <circle cx="720" cy="122" r="14" fill="#cc2200" opacity="0.5" filter="url(#glow)" />
        <rect x="719" y="90" width="2" height="35" fill="#1a0a00" opacity="0.95" />
        <circle cx="720" cy="88" r="2" fill="#ff4400" opacity="0.9" />
      </g>

      {/* Tower base detail */}
      <g fill="#1a0a00" opacity="0.98">
        <rect x="660" y="555" width="120" height="15" />
        <rect x="665" y="570" width="110" height="130" />
        <rect x="700" y="630" width="40" height="70" />
      </g>

      {/* Tall center-left skyscraper */}
      <g fill="#1a0a00" opacity="0.95">
        <rect x="540" y="250" width="70" height="450" />
        <rect x="548" y="230" width="54" height="30" />
        <rect x="554" y="215" width="42" height="20" />
      </g>
      
      {/* Skyscraper windows */}
      <g fill="#ffcc44" opacity="0.6">
        <rect x="548" y="260" width="8" height="5" />
        <rect x="562" y="260" width="8" height="5" />
        <rect x="576" y="260" width="8" height="5" />
        <rect x="590" y="260" width="8" height="5" />
        <rect x="548" y="275" width="8" height="5" />
        <rect x="562" y="275" width="8" height="5" />
        <rect x="576" y="275" width="8" height="5" />
        <rect x="590" y="275" width="8" height="5" />
        <rect x="548" y="290" width="8" height="5" />
        <rect x="562" y="290" width="8" height="5" />
        <rect x="576" y="290" width="8" height="5" />
        <rect x="590" y="290" width="8" height="5" />
        <rect x="548" y="305" width="8" height="5" />
        <rect x="576" y="305" width="8" height="5" />
        <rect x="548" y="320" width="8" height="5" />
        <rect x="562" y="320" width="8" height="5" />
        <rect x="590" y="320" width="8" height="5" />
        <rect x="548" y="335" width="8" height="5" />
        <rect x="576" y="335" width="8" height="5" />
        <rect x="562" y="350" width="8" height="5" />
        <rect x="590" y="350" width="8" height="5" />
      </g>

      {/* Tall center-right skyscraper */}
      <g fill="#1a0a00" opacity="0.95">
        <rect x="830" y="270" width="70" height="430" />
        <rect x="838" y="250" width="54" height="25" />
        <rect x="844" y="235" width="42" height="20" />
      </g>
      <g fill="#ffcc44" opacity="0.5">
        <rect x="840" y="280" width="8" height="5" />
        <rect x="854" y="280" width="8" height="5" />
        <rect x="868" y="280" width="8" height="5" />
        <rect x="882" y="280" width="8" height="5" />
        <rect x="840" y="295" width="8" height="5" />
        <rect x="868" y="295" width="8" height="5" />
        <rect x="854" y="310" width="8" height="5" />
        <rect x="882" y="310" width="8" height="5" />
        <rect x="840" y="325" width="8" height="5" />
        <rect x="854" y="325" width="8" height="5" />
        <rect x="868" y="340" width="8" height="5" />
        <rect x="840" y="340" width="8" height="5" />
        <rect x="882" y="355" width="8" height="5" />
        <rect x="854" y="355" width="8" height="5" />
        <rect x="840" y="370" width="8" height="5" />
        <rect x="868" y="370" width="8" height="5" />
      </g>

      {/* Building windows - foreground scattered */}
      <g fill="#ffcc44" opacity="0.7">
        <rect x="15" y="380" width="6" height="4" />
        <rect x="28" y="380" width="6" height="4" />
        <rect x="15" y="392" width="6" height="4" />
        <rect x="28" y="400" width="6" height="4" />
        <rect x="78" y="360" width="6" height="4" />
        <rect x="88" y="370" width="6" height="4" />
        <rect x="150" y="370" width="6" height="4" />
        <rect x="163" y="340" width="5" height="4" />
        <rect x="175" y="358" width="5" height="4" />
        <rect x="230" y="355" width="6" height="4" />
        <rect x="245" y="370" width="6" height="4" />
        <rect x="290" y="310" width="5" height="4" />
        <rect x="305" y="325" width="5" height="4" />
        <rect x="330" y="360" width="6" height="4" />
        <rect x="345" y="375" width="6" height="4" />
        <rect x="425" y="375" width="6" height="4" />
        <rect x="440" y="390" width="6" height="4" />
        <rect x="495" y="350" width="5" height="4" />
        <rect x="915" y="350" width="5" height="4" />
        <rect x="975" y="375" width="6" height="4" />
        <rect x="990" y="390" width="6" height="4" />
        <rect x="1050" y="355" width="6" height="4" />
        <rect x="1065" y="370" width="6" height="4" />
        <rect x="1115" y="310" width="5" height="4" />
        <rect x="1130" y="325" width="5" height="4" />
        <rect x="1175" y="360" width="6" height="4" />
        <rect x="1190" y="375" width="6" height="4" />
        <rect x="1240" y="370" width="6" height="4" />
        <rect x="1255" y="340" width="5" height="4" />
        <rect x="1300" y="360" width="6" height="4" />
        <rect x="1370" y="380" width="6" height="4" />
        <rect x="1385" y="395" width="6" height="4" />
      </g>

      {/* Ground / Street level */}
      <rect x="0" y="690" width="1440" height="20" fill="#0e0500" />

      {/* Street light glow dots */}
      <g fill="#ff4400" opacity="0.9" filter="url(#glow)">
        <circle cx="200" cy="692" r="3" />
        <circle cx="450" cy="692" r="3" />
        <circle cx="650" cy="692" r="3" />
        <circle cx="800" cy="692" r="3" />
        <circle cx="1000" cy="692" r="3" />
        <circle cx="1200" cy="692" r="3" />
      </g>
    </svg>
  )
}
