import {makeStyles, tokens} from '@fluentui/react-components'
import React from 'react'
import {toHex} from '@/utils'

interface Props {
  bytesPerRow: number
}

const useStyles = makeStyles({
  root: {
    fontWeight: tokens.fontWeightBold,
    display: 'flex',
    columnGap: tokens.spacingHorizontalXS,
  },
  index: {
    display: 'flex',
    marginLeft: '80px',
  },
  indexItem: {
    paddingLeft: tokens.spacingHorizontalXS,
    paddingRight: tokens.spacingHorizontalXS,
  },
})

const Header: React.FC<Props> = (props) => {

  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.index}>
        {[...Array(props.bytesPerRow)].map((_, i) => (
          <span className={styles.indexItem} key={i}>{toHex(i, 2)}</span>
        ))}
      </div>
      <div>Decoded Text</div>
    </div>
  )
}

export default Header
