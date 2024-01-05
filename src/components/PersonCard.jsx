import React from 'react';

function PersonCard({ name, role, description, imageSrc }) {
  return (
    <div className="Leadership_cardsWrapperLg___T_Y2 lightCyan PersonalCard_strong__ngymj Area-module_baseOneStart__32wGE Area-module_baseTwelveEnd__1U2n3 Area-module_mdOneStart__1-O_g Area-module_mdSixEnd__mW4to">
      <div className="PersonalCard_personalCardGrid__X950m PersonalCard_personalCard__rGKT1 Leadership_card__IstGO">
        <div className="ContentfulImage_imageContainer__7du_w PersonalCard_cardWrapper__O8GXM" style={{  position: 'relative' }}>
          <img
            alt={name}
            src={imageSrc}
            decoding="async"
            className="PersonalCard_cardImage__LHDbT PersonalCard_strong__ngymj"
            style={{
              position: 'relative',
              inset: '0px',
              width: '300px', // Adjust the size as needed
              height: '300px', // Adjust the size as needed
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="PersonalCard_cardInfo__atcMh" style={{ marginTop: '10px' }}>
          <div data-testid="bk-taberoni" className="BkTaberoni-module_bkTaberoni__3CE6z lightCyan">
            <div>
              <h3 className="BkText-module_typeShortSmMd__2Y0v_ BkText-module_bkText__3DMy6 BkText-module_medium__2I-l0 BkTaberoni-module_mainText__3XW3H">{name}</h3>
              <span className="BkText-module_typeShortSmMd__2Y0v_ BkText-module_bkText__3DMy6 BkText-module_medium__2I-l0 BkType-module_bkType__2QqHN BkTaberoni-module_helperText__32ZRu" style={{ '--base-helper-marginTop': '4px', '--md-helper-marginTop': '4px', '--lg-helper-marginTop': '4px', '--xl-helper-marginTop': '4px' }}>{role}</span>
            </div>
          </div>
          <div className="BkText-module_typeShortXs__4YFWW BkText-module_bkText__3DMy6 BkText-module_normal__3U7kp BkType-module_bkType__2QqHN PersonalCard_description__tmK3V">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
