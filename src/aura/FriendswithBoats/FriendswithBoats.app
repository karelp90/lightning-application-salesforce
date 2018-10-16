<aura:application extends="force:slds">
    
    <div class="c-container">
        <lightning:layout multipleRows="true">
            <lightning:layoutItem padding="around-small" size="12">
                <div class="page-section page-header">
                    <h2>Friends with Boats</h2>
                </div>
            </lightning:layoutItem>
            <lightning:layoutItem padding="around-small" size="12">
                <lightning:layout>
                    <lightning:layoutItem padding="around-small" size="9">
                        <c:BoatSearch></c:BoatSearch>
                    </lightning:layoutItem>
                    <lightning:layoutItem padding="around-small" size="3">                        
                    </lightning:layoutItem>                    
                </lightning:layout>
            </lightning:layoutItem>            
        </lightning:layout>
    </div>
    
</aura:application>